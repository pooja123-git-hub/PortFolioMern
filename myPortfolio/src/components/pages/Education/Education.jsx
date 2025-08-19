import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import './education.css'
import { Container } from 'react-bootstrap'
const Education = () => {
  return (
   <>
   <Container className='education' id='education'>
      <h2 className='col-12 mt-3 mb-1 text-uppercase  heading2'>Educations Detail</h2>
      <hr />   
      <VerticalTimeline >
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2024-2026"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Master of Computer Application (MCA)</h3>
    <h4 className="vertical-timeline-element-subtitle">Maharaja Agrasen Institute of Management and Technology</h4>
        <h5 className="vertical-timeline-element-subtitle">Kurukshetra University, Kurukshetra</h5>

  </VerticalTimelineElement>
     <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021-2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science (B.Sc. CS)</h3>
    <h4 className="vertical-timeline-element-subtitle">Mukand Lal National College , Yamuna Nagar</h4>
        <h5 className="vertical-timeline-element-subtitle">Kurukshetra University , Kurukshetra</h5>

  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2021"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title"> Senior Secondary (Non-Medical)</h3>
    <h4 className="vertical-timeline-element-subtitle">Mukand Lal Sen.Sec.School , Yamuna Nagar</h4>
        <h5 className="vertical-timeline-element-subtitle">Haryana Board , HBSE</h5>

  </VerticalTimelineElement>


      </VerticalTimeline>
      </Container>


    </>
  )
}

export default Education
