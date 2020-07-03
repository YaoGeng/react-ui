/**
 * name		  : NETextCmp
 * by         : Yeager
 * createTime : 2020.7.1
 * 
 * @param { html: *, size: 13||15||17||19 } props
 * 
 * usage:
        <NETextCmp html={
                <>
                    <span>Hi </span>
                    <span>Yeager</span>
                    <p>giao giao</p>
                </>
            }>
		</NETextCmp>

        <NETextCmp {...{
				html:
				<>
					<span>Hi </span>
					<span>Yeager</span>
					<p>giao giao</p>
                </>,
                size: 13
			}}>
		</NETextCmp>
 */

import React from 'react';
import "./cmp.scss";

const NETextCmp = (props) => {
	const setSize = (size) => {
		switch (size) {
			case 13:
				return "NE-text-size-13"
			case 15:
				return "NE-text-size-15"
			case 17:
				return "NE-text-size-17"
			case 19:
				return "NE-text-size-19"
			default:
				return "NE-text-size-15"
		};
	};
	const data = {
		html: props.html,
		size: setSize(props.size)
	};
	return (
		<Pure {...data} />
	);
};

NETextCmp.defaultProps = {
	html: ""
};

/**
 * 组件纯净部分(雾)
 * @param { html: *, size: 13||15||17||19 } props
 */
const Pure = (props) => {
	return (
		<div className="NE-text-box clearfix">
			<div className={`NE-text-cont ${props.size}`}>
				<Solt {...props} />
			</div>
		</div>
	);
};

/**
 * 业务插槽部分(大雾)
 * @param { html: *, size: 13||15||17||19 } props 
 */
const Solt = (props) => {
	return (
		props.html
	);
};

export default NETextCmp;