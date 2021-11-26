import IndexPortofolio from '../view/Index';
import CreateExperience from '../view/Experience/Create.vue';
import CreateEducation from '../view/Education/Create.vue';
import CreateAwards from '../view/Awards/Create.vue';
import EditExperience from '../view/Experience/Edit.vue';
import EditEducation from '../view/Education/Edit.vue';
import EditAwards from '../view/Awards/Edit.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexPortofolio
    },
    {
        path: '/experience/create',
        name: 'experience.create',
        component: CreateExperience
    },
    {
        path: '/education/create',
        name: 'education.create',
        component: CreateEducation
    },
    {
        path: '/awards/create',
        name: 'awards.create',
        component: CreateAwards
    },
    {
        path: '/experience/edit/:id',
        name: 'experience.edit',
        props: true,
        component: EditExperience
    },
    {
        path: '/education/edit/:id',
        name: 'education.edit',
        props: true,
        component: EditEducation
    },
    {
        path: '/awards/edit/:id',
        name: 'awards.edit',
        props: true,
        component: EditAwards
    },
]

export default routes;