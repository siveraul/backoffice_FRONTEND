import { Fragment , useState } from 'react';
import { Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";
import Select from 'react-select';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Tagsdata } from '../../../common/commondata';

const Tags = () => {
	const [selected, setSelected] = useState([
		"Javascript",
		"ReactJs",
		"AngularJs",
		"VueJs",
		"jQuery",
		"Script",
		"Net",
	]);

	function MultipleselectTags() {
		const [value, setvalue] = useState("");

		const handleOnchange = () => {
			setvalue(value);
		};
		const Optioncategory1 = [
			{
				value: "category-2",
				label: "Firefox",
			},
			{
				value: "category-3",
				label: "Chrome",
			},
			{
				value: "category-4",
				label: "Safari",
			},
			{
				value: "category-5",
				label: "Opera",
			},
			{
				value: "category-6",
				label: "Internet Explorer",
			},
		];
		return (
			
			<Select
			onChange={handleOnchange}
			options={Optioncategory1}
			className="mt-2 "
			classNamePrefix='Select2'
			isSearchable
			placeholder="Firefox"
			menuPlacement='top'
		/>
		);
	}
	const [Default, setDefault] = useState(false);
	const [Links, setLinks] = useState(false);
	const [Defaulttags, setDefaulttags] = useState(false);
	const [Color,setColor] = useState(false);
	return (
		<Fragment>

			<Pageheader title="TAGS"  heading="Elements"   active="Tags" /> 
			<Row>
				<Col xl={6} lg={12}>
					
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								DEFAULT TAG
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										type="switch"
										id="custom-switch"
										onClick={() => setDefault(!Default)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag">First tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Second tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Third tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Fourth tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
									</div>
								</div>
								<Collapse  in={Default} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
	<div className="example">
        <div className="tags">
        	<span className="tag">First tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Second tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Third tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Fourth tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        </div>
	</div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
							
						</Card.Body>
					</Card>
				</Col>
				
				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Link Tag
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										type="switch"
										id="custom-switch"
										onClick={() => setLinks(!Links)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-rounded">First tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Second tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Third tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Fourth tag<Link to="#" className="tag-addon rounded-pill "><i className="fe fe-x"></i></Link></span>
									</div>
								</div>
								<Collapse in={Links} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
	<div className="example">
		<div className="tags">
            <span className="tag tag-rounded">First tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Second tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Third tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Fourth tag<Link to="#" className="tag-addon rounded-pill "><i className="fe fe-x"></i></Link></span>
		</div>
	</div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				
				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Default Tags Addon
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										type="switch"
										id="custom-switch"
										onClick={() => setDefaulttags(!Defaulttags)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-default bg-light">
											One
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Two
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Three
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Four
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
									</div>
								</div>
								<Collapse in={Defaulttags} className="mt-2">
									<pre><code>
										{`
<div className="text-wrap">
    <div className="example">
    	<div className="tags">
    		<span className="tag tag-default bg-light">
    			One
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Two
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Three
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Four
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    	</div>
    </div>
</div>
										`}
										</code></pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										type="switch"
										id="custom-switch"
										onClick={() => setColor(!Color)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										{Tagsdata.map((idx)=>(
										<span className={`tag tag-${idx.class} br-5`} key={Math.random()}>{idx.class} tag<Link to="#" className={`tag-addon bg-${idx.class}`}><i className="fe fe-x"></i></Link> </span>
										))}
									</div>
								</div>
								<Collapse in={Color} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
    <div className="example">
    	<div className="tags">
    		<span className="tag tag-primary br-5">primary tag<Link to="#" className="tag-addon bg-primary"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-secondary br-5">secondary tag<Link to="#" className="tag-addon bg-secondary"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-success br-5">success tag<Link to="#" className="tag-addon bg-success"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-warning br-5">warning tag<Link to="#" className="tag-addon bg-warning"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-teal br-5">teal tag<Link to="#" className="tag-addon bg-teal"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-danger br-5">danger tag<Link to="#" className="tag-addon bg-danger"><i className="fe fe-x"></i></Link> </span>
    	</div>
    </div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				
				<Col lg={12} xl={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Input Tags
							</div>
							
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="">
									<div className='form-group'>
										<div className='bootstrap-tagsinput'>
											<TagsInput
												value={selected}
												onChange={setSelected}
												name="courses"
											/>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			
				<Col lg={12} xl={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Multiple select Tags
							</div>
							<p className="mg-b-10">Multiple Select</p>
							<MultipleselectTags />
							
						</Card.Body>
					</Card>
				</Col>
			
			</Row>
			
		</Fragment>
	);
};

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
