const servicesData = [
    {
        serviceTitle : "Web Development",
        serviceImg:require('./images/web-development.PNG'),
        homeServiceImg:require('./images/web-app.png'),
        serviceDetail : 'Custome web development offers options for business who seek to provide a flexible, consistent experience for users across different platforms, we achieve it through innovative functionality, well designed architecture based on most suitable technology.',
        serviceUrl : '/services/web-development'
    },
    {
        serviceTitle : "Mobile Apps",
        serviceDetail : 'Custome web development offers options for business who seek to provide a flexible, consistent experience for users across different platforms, we achieve it through innovative functionality, well designed architecture based on most suitable technology.',
        serviceImg:require('./images/mobile-apps.PNG'),
        homeServiceImg:require('./images/mobile-app.png'),
        serviceUrl : '/services/web-development'
    },
    {
        serviceTitle : "Ecommerce",
        serviceDetail : 'From product showcase to online payment processing; we provide end-to-end solution to your online store. Our expertise ensures you a hassle-free selling exprerience and PCI compliant security.',
        serviceImg:require('./images/ecommerce.PNG'),
        homeServiceImg:require('./images/ecommerce-online.png'),
        serviceUrl : '/services/ecommerce'
    },
    {
        serviceTitle : "Digital Marketing",
        serviceDetail : 'We can help you get found in search, write and design beautiful white papers, step up your social media game, and promote your company blog , we can write your posts, too.',
        serviceImg:require('./images/digital-m-blk.png'),
        homeServiceImg:require('./images/web-app.png'),
        serviceUrl : '/services/digital-marketing'
    },
    {
        serviceTitle : "Design and Branding",
        serviceDetail : "Our creative team identifies your brand's core characteristics and craft and image that perfectly fits your business identity that work anywhere, all the time. From a new compelling corporate identity to improving your existing logo, we can assist with detailed illustrations for both web and print media.",
        serviceImg:require('./images/design.PNG'),
        homeServiceImg:require('./images/design-branding.png'),
        serviceUrl : '/services/design-branding'
    },
    {
        serviceTitle : "Business Process Outsourcingg",
        serviceDetail : 'Offers the ability to entirely or partially take over the development, maintenance, conversion and enchancement of development, design, support and consultancy services.',
        serviceImg:require('./images/business-process-blk.png'),
        homeServiceImg:require('./images/mobile-app.png'),
        serviceUrl : '/services/business-process-outsourcing'
    },
]

const buildTogetherData = [
    {
        formHeader: 'Tell us about your project',
        name : 'Name',
        email : 'Email',
        phone_no : 'Phone No',
        web_development : 'Web Development',
        mobile_app : 'Mobile App Development',
        ecommerce : 'E-commerce',
        digital_marketing : 'Digital Marketing',
        design_and_branding : 'Design & Branding',
        business_process_outsourcing : 'Business Process Outsourcing',
        less_than_$1000 : 'Less than $1000',
        _$1000_5000 : '$1000-5000',
        _$5000_15000: '$5000-15000',
        more_than_$15000 : 'More Than $15000',
        textarea_placeholder : 'Project description: general description, features list, wireframes, mockups? Application: help with existing one or build from scratch',
        attach_file : 'Attach file',
        submit : 'Submit',
        whats_next : "What's next?",
        point_1 : '1. We will contact you to discuss the next steps.',
        point_2 : '2. In the meantime, you can check our ',
        span:'Portfolio.',
        point_3 : '3. We will sign the NDA if required, and start the project discussion.',
        span:'Portfolio.',
        point_4 : '4. Our experts will analyze your requirements and suggest the best ways to bring your idea to life.'
    },
]

const keyClients = [
    {
        keyClientsImg : require('./images/rahnuma.png'),
        keyClientsAlt : 'Rahnuma Organization'
    },
    {
        keyClientsImg : require('./images/pitb.png'),
        keyClientsAlt : 'PITB Organization'
    },
    {
        keyClientsImg : require('./images/cat.png'),
        keyClientsAlt : 'Cat Shoes Brand'
    },
    {
        keyClientsImg : require('./images/desterous.jpg'),
        keyClientsAlt : 'Desterous Brand'
    },
    {
        keyClientsImg : require('./images/jack.png'),
        keyClientsAlt : 'Jacon Brand'
    },
    {
        keyClientsImg : require('./images/microsoft-partner.png'),
        keyClientsAlt : 'Microsoft Partner'
    },
    {
        keyClientsImg : require('./images/national-officers-academy.png'),
        keyClientsAlt : 'National Officers Academy'
    },
    {
        keyClientsImg : require('./images/smeda.png'),
        keyClientsAlt : 'Smeda'
    },
]


export {servicesData, buildTogetherData, keyClients}