import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

/****************************************************************************************
* Design Skills
****************************************************************************************/

const designSkillsDirectory = join(process.cwd(), '_design-skills')

export function getDesignSkillSlugs() {
    return fs.readdirSync(designSkillsDirectory)
}

export function getDesignSkillBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(designSkillsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllDesignSkills(fields = []) {
    const slugs = getDesignSkillSlugs()
    const items = slugs
        .map((slug) => getDesignSkillBySlug(slug, fields))
        // sort posts by order in ascending order
        .sort((item1, item2) => (item1.order < item2.order ? -1 : 1))
    return items
}

/****************************************************************************************
* Development Skills
****************************************************************************************/

const developmentSkillsDirectory = join(process.cwd(), '_development-skills')

export function getDevelopmentSkillSlugs() {
    return fs.readdirSync(developmentSkillsDirectory)
}

export function getDevelopmentSkillBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(developmentSkillsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllDevelopmentSkills(fields = []) {
    const slugs = getDevelopmentSkillSlugs()
    const items = slugs
        .map((slug) => getDevelopmentSkillBySlug(slug, fields))
        // sort posts by order in ascending order
        .sort((item1, item2) => (item1.order < item2.order ? -1 : 1))
    return items
}

/****************************************************************************************
* Jobs
****************************************************************************************/

const jobsDirectory = join(process.cwd(), '_jobs')

export function getJobSlugs() {
    return fs.readdirSync(jobsDirectory)
}

export function getJobBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(jobsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllJobs(fields = []) {
    const slugs = getJobSlugs()
    const items = slugs
        .map((slug) => getJobBySlug(slug, fields))
        // sort posts by startDate in descending order
        .sort((item1, item2) => (item1.startDate > item2.startDate ? -1 : 1))
    return items
}

/****************************************************************************************
* Education
****************************************************************************************/

const educationDirectory = join(process.cwd(), '_education')

export function getEducationSlugs() {
    return fs.readdirSync(educationDirectory)
}

export function getEducationBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(educationDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllEducation(fields = []) {
    const slugs = getEducationSlugs()
    const items = slugs
        .map((slug) => getEducationBySlug(slug, fields))
        // sort posts by startDate in descending order
        .sort((item1, item2) => (item1.startDate > item2.startDate ? -1 : 1))
    return items
}

/****************************************************************************************
* Clients
****************************************************************************************/

const clientsDirectory = join(process.cwd(), '_clients')

export function getClientSlugs() {
    return fs.readdirSync(clientsDirectory)
}

export function getClientBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(clientsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllClients(fields = []) {
    const slugs = getClientSlugs()
    const items = slugs
        .map((slug) => getClientBySlug(slug, fields))
        // sort posts by order in ascending order
        .sort((item1, item2) => (item1.startDate < item2.startDate ? -1 : 1))
    return items
}