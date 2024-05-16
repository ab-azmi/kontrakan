<script setup lang="ts">
const projects = [
    {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/wellbeing.png",
        link: "https://github.com/ab-azmi/alifia_app",
        name: "UNNES Wellbeing",
        meta: "for a Client - 2024",
        description: "This is a project that i made for a client. It is a web app that can help students to find a psychologist and made an appointment. I use Laravel as back end, Livewire as front end, and TailwindCSS for styling. I also use Pusher for real time chat. I made this project alone within 4 and a half weeks. It was a great experience. In this project i learn a lot about Websocket and Alpine JS.",
        tools: [
            {
                name: "Laravel",
                color: "red"
            },
            {
                name: "Livewire",
                color: "pink",
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "Alpine JS",
                color: "green"
            },
            {
                name: "Pusher",
                color: "gray"
            },
        ]
    },
    {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/pawra.png",
        link: "https://github.com/pawra-id",
        name: "PAWRA (Pet Anxiety and Welfare Robust Analyzer)",
        meta: "for Bangkit Academy by Google, GoTo, & Traveloka - 2023",
        description: "THE MOST COMPLEX PROJECT so far. I made this project with my team from Bangkit Academy. We build a web app that can analyze pet's anxiety and welfare. We use FastAPI as back end and Android App (Jetpack Compose) as front end. We also use Tensorflow to build the model. We deploy the app on Google Cloud Platform. We won the top 50 out of 639 teams. I was so happy and proud of my team. It was a great experience.",
        tools: [
            {
                name: "FastAPI",
                color: "gray"
            },
            {
                name: "Nuxt JS",
                color: "green",
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "Kotlin",
                color: "purple"
            },
            {
                name: "Tensorflow",
                color: "orange"
            },
            {
                name: "Google Cloud Platform",
                color: "pink"
            }
        ]
    },
    {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/hris.png",
        link: "https://github.com/ab-azmi/hris_app",
        name: "Human Resource Information System",
        meta: "for PT Adi Sarana Armada Tbk - 2023",
        description: "This is a project that i worked on during my internship program at PT Adi Sarana Armada Tbk. I used Laravel as back end, Vue JS as front end, and Inertia JS to bridge them. Everything from design to testing i do them my self with my mentors guidance",
        tools: [
            {
                name: "Laravel",
                color: "red"
            },
            {
                name: "VueJS",
                color: "green",
            },
            {
                name: "InertiaJS",
                color: "purple"
            },
            {
                name: "TailwindCSS",
                color: "blue"
            }
        ]
    }, {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/astral.png",
        link: "http://erp.alluresystem.site/login",
        name: "ERP Sales Management System",
        meta: "for PT Allure Industries - 2022",
        description: "I made this system during my internship at PT Allure Industries. It is part of larger ERP ecosystem. This one was build to help them to monitor and manage sales activities. I made this with my team from the same University.",
        tools: [
            {
                name: "Laravel",
                color: "red"
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "Git",
                color: "orange"
            }
        ]
    }, {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/survey.png",
        link: "https://github.com/ab-azmi/laravel-vue-survey",
        name: "Survey Web App",
        meta: "for Hobby project",
        description: "This project was made when i started learning Vue JS. Survey App allow users to make, monitor, and share survey form. I took advantage of reusable component from Vue JS and REST API from Laravel.",
        tools: [
            {
                name: "Laravel",
                color: "red"
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "VueJs",
                color: "green"
            },
        ]
    },
    {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/tugas.png",
        link: "https://github.com/ab-azmi/manajemen-orientasi",
        name: "Students Assignment Web App",
        meta: "for Hobby project",
        description: "This is a project that allow users to make, manage, and monitor their assignment. I made this project to learn more about advanced Eloquent ORM, complex database, and Livewire using Laravel Framework.",
        tools: [
            {
                name: "Laravel",
                color: "red"
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "Livewire",
                color: "pink"
            },
        ]
    },
    {
        image: "https://ikzkefhtqowmydzcgjmy.supabase.co/storage/v1/object/public/images/projects/portfolio.png",
        link: "https://dribbble.com/shots/16743976-Portfolio-Design/attachments/11790523?mode=media",
        name: "Portfolio UI Design",
        meta: "for Hobby project",
        description: "This one is different. Back then i thought my passion is UI/UX, so i made this and post in on dribble. Later i found out that coding is more fun and challenging. So i shift toward web development. I can still designing, but not in advance level.",
        tools: [
            {
                name: "VueJS",
                color: "green"
            },
            {
                name: "TailwindCSS",
                color: "blue"
            },
            {
                name: "Figma",
                color: "gray"
            },
        ]
    }
]
</script>

<template>
    <main class="px-7">
        <h1 class="text-3xl text-display mb-10">Projects</h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
            <div v-for="project in projects" :key="project.name"
                class="w-full flex flex-col rounded-lg bg-white/20 backdrop-blur-md h-fit">
                <div class="p-5 rounded-t-lg">
                    <div class="overflow-hidden w-full rounded-lg h-52">
                        <img class="object-cover w-full h-full" :src="project.image" :alt="project.name" />
                    </div>
                </div>
                <div class=" px-5">
                    <a target="_blank" :href="project.link"
                        class="text-white text-lg font-semibold hover:text-display transition-colors">{{ project.name }}
                        &rarr;</a>
                    <p class="italic text-sm text-white/30">{{ project.meta }}</p>
                    <p class="text-sm text-white mt-3">
                        {{ project.description }}
                    </p>
                </div>
                <div class="rounded-b-lg px-5 py-8 flex flex-wrap gap-2">
                    <span v-for="tool in project.tools" :key="tool.name"
                        :class="tool.color == 'red' ? 'bg-red-300 text-red-900' : tool.color == 'blue' ? 'bg-blue-300 text-blue-900' : tool.color == 'green' ? 'bg-green-300 text-green-900' : tool.color == 'purple' ? 'bg-purple-300 text-purple-900' : tool.color == 'orange' ? 'bg-orange-300 text-orange-900' : tool.color == 'pink' ? 'bg-pink-300 text-pink-900' : tool.color == 'gray' ? 'bg-gray-300 text-gray-900' : ''"
                        class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium">
                        <svg class="h-1.5 w-1.5"
                            :class="tool.color == 'red' ? 'fill-red-900' : tool.color == 'blue' ? 'fill-blue-900' : tool.color == 'green' ? 'fill-green-900' : tool.color == 'purple' ? 'fill-purple-900' : tool.color == 'orange' ? 'fill-orange-900' : tool.color == 'pink' ? 'fill-pink-900' : tool.color == 'gray' ? 'fill-gray-900' : ''"
                            viewBox="0 0 6 6" aria-hidden="true">
                            <circle cx="3" cy="3" r="3" />
                        </svg>
                        {{ tool.name }}
                    </span>
                </div>
            </div>
        </div>
    </main>
</template>
