import React from "react";
import Table from "react-bootstrap/Table";
import "./ResourcesSection.css";

const ResourcesSection = () => {
	const resources = [
		{ documents: "Custom Part Fabrication", file: "195kb", download: "pdf" },
		{
			documents: "Sheet Metal Fabrication Form",
			file: "254kb",
			download: "pdf",
		},
	];

	const renderResources = (resource, index) => {
		return (
			<tr key={index}>
				<td>{resource.documents}</td>
				<td>{resource.file}</td>
				<td>{resource.download}</td>
			</tr>
		);
	};

	return (
		<div className="resources-table">
			<Table table striped bordered hover >
				<thead>
					<tr>
						<th>Documents</th>
						<th>File Size</th>
						<th>Download</th>
					</tr>
				</thead>
				<tbody>
					{resources.map(renderResources)}
					{/* <tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr> */}
				</tbody>
			</Table>
		</div>
	);
};

export default ResourcesSection;
