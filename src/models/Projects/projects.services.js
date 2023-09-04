const db = require('../../utils/database');
const projectsControllers = require('./projects.controllers');

const getAllProjects = async (req, res) => {
    const data = await projectsControllers.getAllProjects()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
    return data
}

const getProjectByCustomerId = async (req, res) => {
    const id = req.params.id;
    const data = await projectsControllers.getProjectByCustomerId(id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
    return data
}

const getProjectById = async (req, res) => {
    const id = req.params.id;
    const data = await projectsControllers.getProjectById(id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
    return data
}

const createProject = async (req, res) => {
    const { title, address, projectSigns, confirmationDate, sale, cost, quote, pays, instalationDate, estimatedEnd, additionalProducts, notes, otherContacts } = req.body;
    try {
        if (!title || !confirmationDate) {
            return res.status(404).json({
                message: 'Faltan campos',
                fields: {
                    title: 'String',
                    address: 'String',
                    confirmationDate: 'String',
                    sale: 'Number',
                    cost: 'Number',
                    quote: 'String',
                    pays: 'Number',
                    instalationDate: 'String',
                    estimatedEnd: 'String',
                }

            });
        }
        else {
            const newProject = await projectsControllers.createProject({
                customer_id,
                title,
                address,
                projectSigns,
                confirmationDate,
                sale,
                quote,
                cost,
                pays,
                instalationDate,
                estimatedEnd,
                additionalProducts,
                notes,
                otherContacts,
            })
            res.status(200).json({ newProject: newProject });
        }
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }

}

const updateProject = async (req, res) => {
    const { customer_id, title, address, projectSigns, confirmationDate, sale, cost, quote, pays, instalationDate, estimatedEnd, additionalProducts, notes, otherContacts } = req.body;
    const projectId = req.params.id;
    try {
        const updatedProject = projectsControllers.updateProject(projectId, {
            customer_id,
            title,
            address,
            projectSigns,
            confirmationDate,
            sale,
            quote,
            cost,
            pays,
            instalationDate,
            estimatedEnd,
            additionalProducts,
            notes,
            otherContacts,
        });
        res.status(200).json({
            updatedProject: projectId,
            body: req.body
        });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}


module.exports = {
    getAllProjects,
    getProjectByCustomerId,
    getProjectById,
    createProject,
    updateProject,
}