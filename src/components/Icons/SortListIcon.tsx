import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function SortListIcon({ active }: SVGIconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clip-rule="evenodd"
				d="M7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L12 6.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711Z"
				fill={active ? colors.lightBlue.primary : 'white'}
			/>
			<path
				fillRule="evenodd"
				clip-rule="evenodd"
				d="M16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929C7.68342 13.9024 8.31658 13.9024 8.70711 14.2929L12 17.5858L15.2929 14.2929C15.6834 13.9024 16.3166 13.9024 16.7071 14.2929Z"
				fill={active ? colors.lightBlue.primary : 'white'}
			/>
		</svg>
	);
}