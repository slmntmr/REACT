import React from "react";
import PageHeader from "../components/page-header";
import Blog from "../components/blog";
import { $t } from "../helpers/locale-helper";

const BlogPage = () => {
	return (
		<>
			<PageHeader title={$t("blog")} />
			<Blog />
		</>
	);
};

export default BlogPage;
