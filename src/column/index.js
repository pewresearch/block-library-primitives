/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
	createBlock,
	registerBlockStyle,
	registerBlockVariation,
	rawHandler,
} from '@wordpress/blocks';
import { Fragment, useEffect } from '@wordpress/element';
import {
	InspectorControls,
	InspectorAdvancedControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	TextControl,
	ToggleControl,
	CardDivider,
	PanelBody,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

console.log('Hello World -> src/column/index.js');

function getAllWidths(otherColumns, clientId) {
	const allColumnWidths = [];
	const thisColumn = otherColumns.findIndex(
		(column) => column.clientId === clientId,
	);
	console.log('getAllWidths() thisColumn: ', thisColumn);
	const { width } = otherColumns[thisColumn].attributes;

	otherColumns.forEach((column) => {
		// if column attributes does not have a width property then continue.
		if (column.attributes.width) {
			let columnWidth = column.attributes.width;
			// if (clientId === column.clientId) {
			// 	columnWidth = width;
			// }
			// Remove %, px, vw, vh from columnWidth
			columnWidth = columnWidth.replace(/%|px|vw|vh/g, '');
			allColumnWidths.push(columnWidth);
		}
	});

	console.log('getAllWidths() allColumnWidths: ', allColumnWidths);

	return allColumnWidths.reduce((acc, curr) => acc + parseInt(curr), 0);
}

function calculateAvailableWidth(otherColumns, clientId) {
	return 100 - getAllWidths(otherColumns, clientId);
}

addFilter(
	'editor.BlockEdit',
	'prc-core-block-library/column',
	createHigherOrderComponent(
		(BlockEdit) =>
			function ColumnBlockAdvancedControls(props) {
				const { name, attributes, setAttributes, clientId } = props;
				if ('core/column' !== name) {
					return <BlockEdit {...props} />;
				}

				const { width, fillWidth } = attributes;

				const { index, hasChildBlocks, otheColumnBlocks, rootClientId } =
					useSelect(
						(select) => {
							const {
								getBlocks,
								getBlockIndex,
								getBlockOrder,
								getBlockRootClientId,
								getBlockAttributes,
							} = select('core/block-editor');

							const rootBlockClientId = getBlockRootClientId(clientId);
							// Get attributes from 'core/columns' parent block.
							const rootAttributes = getBlockAttributes(rootBlockClientId);

							const toReturn = {
								index: getBlockIndex(clientId, rootBlockClientId),
								hasChildBlocks: 0 < getBlockOrder(clientId).length,
								otheColumnBlocks: getBlocks(rootBlockClientId),
								rootClientId: rootBlockClientId,
								rootAttributes,
							};
							console.log('core/column->advanced', toReturn);
							return toReturn;
						},
						[clientId],
					);

				useEffect(() => {
					if (0 < otheColumnBlocks.length) {
						console.log(
							'max width available: ',
							calculateAvailableWidth(otheColumnBlocks, clientId),
						);
					}
				}, [otheColumnBlocks]);

				useEffect(() => {
					if (fillWidth) {
						// Null out width to use the remaining width available.
						setAttributes({ width: '' });
					}
				}, [fillWidth]);

				return (
					<Fragment>
						<BlockEdit {...props} />
						<InspectorAdvancedControls>
							<p>Column Advanced Controls</p>
							<ToggleControl
								label={__('Fill width with remaining')}
								checked={fillWidth}
								onChange={() => {
									setAttributes({ fillWidth: !fillWidth });
								}}
								help={__(
									'Zeroes out the width, flexbox then fills the remaining width.',
								)}
							/>
							<CardDivider />
						</InspectorAdvancedControls>
					</Fragment>
				);
			},
		'withColumnBlockAdvancedControls',
	),
	21,
);
