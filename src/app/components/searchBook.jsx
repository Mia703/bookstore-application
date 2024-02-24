"use client"
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

export default function SearchBook() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

	function handleOnClick() {
		setExpanded(!isExpanded);
	}
	
	const style = {
		bookContainer: {
			display: 'grid',
			gridTemplateColumns: 'max-content max-content',
			gap: '10px'
		},
		bookImageContainer: {
			backgroundColor: 'grey',
			width: '10rem',
			height: '15rem',
		},
		buttonStyle: {
			marginBottom: '0.5rem',
			width: '10rem',
		},
		textStyle: {
			marginBottom: '0.5rem',
			first: {
				marginTop: '1rem'
			}
		},
		dropdownContainer: {
			display: 'flex',
			flexDirection: 'column',
		}
	};

	return (
		<div className="book-container" style={style.bookContainer}>
			<div className="book-image-container" style={style.bookImageContainer}>
				<img src="" alt="" />
			</div>

			<div className="book-content-container">
				<div className="content-container">
					<h2 className="title bold" style={style.textStyle.first}>Title</h2>
					<p className="author" style={style.textStyle}>Author</p>
					<p className="desc" style={style.textStyle}>Description</p>
				</div>

				<div className="dropdown-container" style={style.dropdownContainer}>
					<div
						{...getToggleProps({ onClick: handleOnClick })}
						className="header"
					>
						<button type="button" className="button-highlight" style={style.buttonStyle}>
							Add to Library
						</button>
					</div>
					<div {...getCollapseProps()}>
						<div className="content" style={style.dropdownContainer}>
							<button type="button" style={style.buttonStyle}>Want to Read</button>
							<button type="button" style={style.buttonStyle}>Currently Reading</button>
							<button type="button" style={style.buttonStyle}>Read</button>
							<button type="button" style={style.buttonStyle}>Discontinued</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}