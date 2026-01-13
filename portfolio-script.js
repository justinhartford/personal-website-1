// Company data with projects and achievements
const companyData = {
    spring: {
        name: "Spring Health",
        role: "Growth Lead, ABM",
        dates: "February 2025 - Present",
        summary: "Built ABM and Field Marketing from the ground up, driving 53% account engagement uplift and $3.1M in pipeline through AI-powered experimentation.",
        projects: [
            {
                title: "ABM Engine from Scratch",
                description: "Built account-based marketing program from zero. Fixed account field alignment across Salesforce, HubSpot, and 6Sense. Created targeted campaigns across entire customer lifecycle.",
                results: ["53% uplift in account engagement", "$3.1M pipeline generated"],
                images: []
            },
            {
                title: "BDR Sequence Overhaul",
                description: "Rewrote email sequences focusing on replies over meetings. Shortened copy, made it more conversational, asked direct questions.",
                results: ["Reply rate increased from <1% to 12% in 6 weeks", "Meetings booked rose from ZERO to ~4/week"],
                images: []
            },
            {
                title: "Vertical Campaign - Manufacturing & Healthcare",
                description: "Partnered with sales to develop targeted vertical campaigns. Created custom video content from customer stories (General Mills, WellStar). Overhauled vertical pages and built lead gen through LinkedIn and content syndication.",
                results: ["$95 CPL (vs $400+ baseline)", "9 direct opportunities from LinkedIn leads", "Sales actively calls on vertical campaign leads"],
                images: ['page_3.png', 'page_4.png']
            },
            {
                title: "LinkedIn Advertising Restructure",
                description: "Rebuilt evergreen LinkedIn campaigns with pain point/value prop structure and intent/engagement retargeting. Previously used same creative for entire audience with lead gen focus only.",
                results: ["CPL dropped from >$400 to ~$150", "21 leads/month average"],
                images: ['page_5.png']
            }
        ]
    },
    grammarly: {
        name: "Grammarly",
        role: "Sr Manager, Demand Generation & Brand Ambassador",
        dates: "February 2024 - Present",
        summary: "Led enterprise IT buyer demand gen programs across multiple channels, contributing $4M+ influenced pipeline and $1.2M revenue. Solved the 'IT blocker' problem.",
        projects: [
            {
                title: "IT Persona Strategy",
                description: "40% of Enterprise closed-lost deals were IT blocked. Grammarly historically sold to marketers and wasn't speaking to IT pain points. Developed two-pillar IT program: content for champions to send to IT, and direct-to-IT campaigns.",
                results: ["IT blocked rate dropped from 40% to 20%", "$1.5M revenue from IT Symposium", "$4M pipeline", "14 qualified Enterprise IT hand-raisers/month"],
                images: ['page_6.png', 'page_7.png', 'page_8.png', 'page_9.png']
            },
            {
                title: "Multi-Channel IT Campaigns",
                description: "Developed AI ROI Framework with product team. BDRs active in tech forums. Advertising on LinkedIn, Meta, Reddit. Partnership with Morning Brew (newsletter, podcast, virtual event). OOH ads at RSA conference. Gartner IT Symposium presence (dinner, happy hour, booth).",
                results: ["Leading traffic to Trust Center from Reddit (organic)", "Created commercial that shipped"],
                images: ['page_7.png', 'page_8.png']
            }
        ]
    },
    cfi: {
        name: "Corporate Finance Institute",
        role: "B2B Demand Generation Director",
        dates: "March 2023 - January 2024",
        summary: "Transformed B2B demand gen from volume-based to quality-focused engine. In 11 months, dramatically improved conversion rates and marketing-sourced revenue.",
        projects: [
            {
                title: "Lead Quality Transformation",
                description: "Rebuilt full-funnel demand generation and capture strategy focused on fit over volume. Completely reimagined lead qualification process.",
                results: ["MQL to Opportunity rate: 25% → 45%", "Unqualified MQL rate: 20% → 5%", "49% increase in marketing-sourced revenue YoY", "79% of B2B revenue sourced by marketing (up from 43%)"],
                images: []
            }
        ]
    },
    amperity: {
        name: "Amperity",
        role: "Sr. Campaigns Marketing Manager",
        dates: "October 2020 - March 2023",
        summary: "Led integrated ABM, brand, and demand campaigns sourcing $10M+ revenue. Built content and paid media engines that scaled organically and efficiently.",
        projects: [
            {
                title: "Economics of Messy Data Campaign",
                description: "Original campaign strategy focused on business/brand/employee economics narrative. Orchestrated full campaign including ad creative and video script. Multi-channel activation across paid social, owned properties, and events.",
                results: ["Generated qualified pipeline", "Drove brand awareness across target accounts"],
                images: ['page_10.png', 'page_11.png', 'page_12.png']
            },
            {
                title: "Organic LinkedIn Growth",
                description: "Created consumable, relevant content practitioners wanted to read and share. No gated assets or product pitches—just useful content.",
                results: ["Tripled organic LinkedIn following"],
                images: []
            },
            {
                title: "Paid Search Optimization",
                description: "Rebuilt paid search strategy focused on efficiency and qualified leads.",
                results: ["Doubled MQLs and revenue opportunities", "Cut budget in half"],
                images: []
            },
            {
                title: "Email Nurture System",
                description: "Built persona-based nurture tracks (Marketing, Leadership, IT) that moved qualified leads through the funnel.",
                results: ["300% increase in qualified lead throughput"],
                images: []
            },
            {
                title: "Paid LinkedIn by Buyer Stage",
                description: "Created campaigns targeted by buyer stage rather than one-size-fits-all approach.",
                results: ["$2.5M in pipeline generated"],
                images: []
            }
        ]
    },
    pushpay: {
        name: "Pushpay",
        role: "Marketing Campaigns Manager, Enterprise & Sales Development Team Lead",
        dates: "December 2016 - April 2020",
        summary: "Scaled qualified lead generation for Enterprise and Mid-Market segments while significantly improving efficiency.",
        projects: [
            {
                title: "Lead Generation Scale",
                description: "Rebuilt paid social strategy and launched major user conferences to drive qualified pipeline.",
                results: ["300% increase in qualified Enterprise leads over 2 years", "200% increase in Mid-Market leads over 2 years", "Cut paid social budget by 30%"],
                images: []
            },
            {
                title: "User Conferences",
                description: "Promoted physical and digital user conferences to drive engagement and pipeline.",
                results: ["1,200 registrants for physical event", "20,000 registrants for digital event"],
                images: []
            }
        ]
    }
};

// Handle company node clicks
document.querySelectorAll('.company-node').forEach(node => {
    node.addEventListener('click', function() {
        const company = this.dataset.company;
        const data = companyData[company];
        
        showDetailPanel(data);
    });
});

function showDetailPanel(data) {
    const panel = document.getElementById('detailPanel');
    const content = document.getElementById('detailContent');
    
    let html = `
        <h2>${data.name}</h2>
        <p class="role-dates"><strong>${data.role}</strong> | ${data.dates}</p>
        <p>${data.summary}</p>
    `;
    
    data.projects.forEach(project => {
        html += `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
        `;
        
        if (project.results.length > 0) {
            html += '<ul>';
            project.results.forEach(result => {
                html += `<li>${result}</li>`;
            });
            html += '</ul>';
        }
        
        if (project.images.length > 0) {
            html += '<div class="project-images">';
            project.images.forEach(img => {
                html += `<img src="portfolio-images/${img}" alt="${project.title}">`;
            });
            html += '</div>';
        }
        
        html += '</div>';
    });
    
    content.innerHTML = html;
    panel.classList.add('active');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Close panel
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('detailPanel').classList.remove('active');
});

// Philosophy tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Update content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tab).classList.add('active');
    });
});
