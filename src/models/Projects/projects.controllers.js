const uuid = require('uuid')
const Projects = require('./projects.model')

const getAllProjects = async () => {
    const data = await Projects.findAll({
        order: [['paystatus', 'DESC']],
    })
    return data
}

const getProjectById = async (id) => {
    const data = await Projects.findByPk(id)
    return data
}

const getProjectByCustomerId = async (id) => {
    const data = await Projects.findAll({
        order: [['paystatus', 'DESC']],
        where: { customer_id: id }
    })
    return data
}


const createProject = async (data) => {
    const newProject = await Projects.create({
        id: uuid.v4(),
        customer_id: data.customer_id,
        title: data.title,
        address: data.address,
        projectSigns: data.projectSigns,
        confirmationDate: data.confirmationDate,
        cost: data.cost,
        sale: data.sale,
        quote: data.quote,
        pays: data.pays,
        instalationDate: data.instalationDate,
        estimatedEnd: data.estimatedEnd,
        additionalProducts: data.additionalProducts,
        notes: data.notes,
        otherContacts: data.otherContacts,
    });
    return newProject;
};

const updateProject = async (id, body) => {
    const result = await Projects.update(body, {
        where: { id }
    })
    return result
}

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByCustomerId,
    createProject,
    updateProject,
}