import { useFormik } from "formik";
import { insertUserBook, useSleep } from "../../../api/methods";
import "./libraryStyle.css";

export default function LibraryBook({
	book_isbn,
	book_title,
	book_cover,
	book_rating,
	reading_status,
	user_comments,
	start_date,
	end_date,
	last_read_page,
	total_pages,
}) {
	const { addUserBook } = insertUserBook();
	const sleep = useSleep();

	const formikUserBook = useFormik({
		initialValues: {
			rating: "",
			readingStatus: "",
			userComments: "",
			startDate: "",
			endDate: "",
			lastPageRead: "",
		},
		onSubmit: async (values) => {
			await sleep(500);
			// if rating is empty
			if (values.rating == "") {
				values.rating = `${book_rating}`;
			}
			// if reading status
			if (values.readingStatus == "Want to Read") {
				values.readingStatus = "wantToRead";
			} else if (values.readingStatus == "Currently Reading") {
				values.readingStatus = "currentlyReading";
			} else if (values.readingStatus == "Read") {
				values.readingStatus = "read";
			} else if (values.readingStatus == "Discontinued") {
				values.readingStatus = "discontinued";
			} else {
				values.readingStatus = "unknownStatus";
			}
			// if user comments
			if (values.userComments == "") {
				values.userComments = `${user_comments}`;
			}
			// if startDate
			if (values.startDate == "") {
				values.startDate = `${start_date}`;
			}
			// if end date
			if (values.endDate == "") {
				values.endDate = `${end_date}`;
			}
			// if last page read
			if ((values.lastPageRead == "")) {
				values.lastPageRead = `${last_read_page}`;
			}
			
			// insert into database
			addUserBook(
				book_isbn,
				values.rating,
				values.readingStatus,
				values.userComments,
				values.startDate,
				values.endDate,
				values.lastPageRead
			);
			await sleep(500);
		},
	});

	return (
		<div className={`book-container ${reading_status}`}>
			<img src={book_cover} alt={book_title} className="book-cover" />
			<div>
				{/* <form onSubmit={formikUserBook.handleSubmit}>
					<div>
						<label htmlFor="rating">Rating: </label>
						<input
							type="text"
							name="rating"
							id="rating"
							placeholder={book_rating}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.rating}
						/>
					</div>

					<div>
						<label htmlFor="readingStatus">Reading Status: </label>
						<input
							type="text"
							name="readingStatus"
							id="readingStatus"
							placeholder={
								reading_status == "wantToRead"
									? "Want to Read"
									: reading_status == "currentlyReading"
									? "Currently Reading"
									: reading_status == "read"
									? "Read"
									: reading_status == "discontinued"
									? "Discontinued"
									: "Unknown Status"
							}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.readingStatus}
						/>
					</div>

					<div>
						<label htmlFor="userComments">Comments: </label>
						<input
							type="textarea"
							name="userComments"
							id="userComments"
							placeholder={user_comments}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.userComments}
						/>
					</div>

					<div>
						<label htmlFor="startDate">Start Date: </label>
						<input
							type="text"
							name="startDate"
							id="startDate"
							placeholder={start_date}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.startDate}
						/>
					</div>

					<div>
						<label htmlFor="endDate">End Date: </label>
						<input
							type="text"
							name="endDate"
							id="endDate"
							placeholder={end_date}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.endDate}
						/>
					</div>

					<div>
						<label htmlFor="lastPageRead">Last Read Page: </label>
						<input
							type="text"
							name="lastPageRead"
							id="lastReadPage"
							placeholder={`${last_read_page}/${total_pages}`}
							onBlur={formikUserBook.handleBlur}
							onChange={formikUserBook.handleChange}
							value={formikUserBook.values.lastPageRead}
						/>
					</div>
					<div>
						<label htmlFor="progress">Reading Progress: </label>
						<input
							type="text"
							name="progress"
							id="progress"
							placeholder={`${Math.trunc(
								(last_read_page / total_pages) * 100
							)}%`}
							disabled
						/>
					</div>
					<button type="submit">submit</button>
				</form> */}
			</div>
		</div>
	);
}
