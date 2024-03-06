import AccountNav from "./accountNavigation";
import app from "../../../api/firebase"
import { getAuth } from "firebase/auth";
import supabase from "../../../api/supabase";
import { useState, useEffect } from "react";

export default function AccountSidebar() {
	const styles = {
		sidebar: {
			backgroundColor: "var(--accent-light)",
			padding: "var(--std-section-padding)",
			borderRadius: "var(--std-section-border-radius)",
			border: "2px solid var(--font)",
			textAlign: "center",
			minWidth: "min-content",
		},
	};

	const auth = getAuth(app);
	const user = auth.currentUser;
	// get the current user's uuid and return their first name
	const [data, setData] = useState(null);
	if (user !== null) {
		useEffect(() => {
			async function fetchData() {
				const { data, error } = await supabase
					.from("users")
					.select("first_name")
					.eq("uuid", `${user.uid}`);

				if (error) {
					console.log("Error: Could not fetch data from supabase. ", error);
				} else {
					// console.log(data);
					setData(data);
				}
			}
			fetchData();
		}, []);
	}
	
	return (
		<div className="sidebar" style={styles.sidebar}>
			{data ? (
				// data.map((item) => <h1>{item.first_name}</h1>)
				<h1>{data[0].first_name}</h1>
			) : (
				<h1></h1>
			)}
			<AccountNav />
		</div>
	);
}
