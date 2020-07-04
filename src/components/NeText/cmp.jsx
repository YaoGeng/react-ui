/**
 * name		  : NeText
 * by         : Yeager
 * createTime : 2020.7.1
 * 
 * @param { html: *, size: 13||15||17||19 } props
 * 
 * usage:
        <NeText html={
                <>
                    <span>Hi </span>
                    <span>Yeager</span>
                    <p>giao giao</p>
                </>
            }>
		</NeText>

        <NeText {...{
				html:
				<>
					<span>Hi </span>
					<span>Yeager</span>
					<p>giao giao</p>
                </>,
                size: 13
			}}>
		</NeText>
 */

import React from 'react';
import PropTypes from "prop-types";
import "./cmp.scss";

const NeText = (props) => {
	const setSize = (size) => {
		switch (size) {
			case 13:
				return "NE-text-size-13";
			case 15:
				return "NE-text-size-15";
			case 17:
				return "NE-text-size-17";
			case 19:
				return "NE-text-size-19";
			default:
				return "NE-text-size-15";
		}
	};
	const data = {
		html: props.html,
		size: setSize(props.size),
	};
	return <Pure {...data} />;
};

NeText.defaultProps = {
	html: "",
	size: 15
};

NeText.propTypes = {
	/**
	 * 非必传
	 * value: *
	 */
	html: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.element]),
	/**
	 * 非必传
	 * value: 13 | 15 | 17 | 19
	 */
	size: PropTypes.number,
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

export default NeText;