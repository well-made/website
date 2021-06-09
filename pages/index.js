import { getAllDesignSkills, getAllDevelopmentSkills, getAllEducation, getAllJobs, getAllClients } from '../lib/api';

import Skill from '../components/skill';
import Job from '../components/job';
import Education from '../components/education';
import Client from '../components/client';

function HomePage({ designSkills, developmentSkills, jobs, education, clients }) {
    return (
        <div>
            { designSkills.map((item) => (<Skill item={item} />))}
            { developmentSkills.map((item) => (<Skill item={item} />))}
            { jobs.map((item) => (<Job item={item} />))}
            { education.map((item) => (<Education item={item} />))}
            { clients.map((item) => (<Client item={item} />))}
        </div>
    )
}

export default HomePage

export async function getStaticProps() {

    // Design Skills

    const designSkills = getAllDesignSkills([
        'title',
        'order',
        'experience',
    ])

    // Development Skills

    const developmentSkills = getAllDevelopmentSkills([
        'title',
        'order',
        'experience',
    ])

    // Jobs

    const jobs = getAllJobs([
        'title',
        'startDate',
        'type',
        'location',
    ])

    // Education

    const education = getAllEducation([
        'title',
        'startDate',
        'level',
        'location',
    ])

    // Clients

    const clients = getAllClients([
        'title',
    ])

    return {
        props: { designSkills, developmentSkills, jobs, education, clients },
    }
}