import React from 'react'
import styles from './index.module.css'

import SmallLogo from '../SVG/SmallLogo'

const items = [
	{
		title: 'Download',
		url: 'https://github.com/atomiclabs/hyperdex/releases/latest'
	},
	// {
	// 	title: 'Blog',
	// 	url: '/blog'
	// },
	{
		title: 'GitHub',
		url: 'https://github.com/atomiclabs/hyperdex'
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/hyperdexapp'
	}
]

export default () => <div className={styles.footer}>
	<SmallLogo />
	<ul className={styles.navLinks}>
		{
			items.map(({title, url}) => <li key={title}><a href={url}>{title}</a></li>)
		}
	</ul>
</div>
