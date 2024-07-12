
import React from 'react';
import './Blogging.css'; 

const Blogging = () => {
    const blogPosts = [
        {
            title: 'Understanding Digital Marketing',
            date: 'July 5, 2024',
            description:
                'Digital marketing is a comprehensive approach to promoting products and services online. It encompasses various strategies and techniques to reach and engage the target audience...',
            imageUrl: 'https://images.unsplash.com/photo-1588064643233-49210b27b82e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'The Importance of SEO',
            date: 'June 25, 2024',
            description:
                'SEO, or Search Engine Optimization, is crucial for improving the visibility of your website in search engine results. Learn how to optimize your site to rank higher...',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        },
        {
            title: 'Social Media Marketing Tips',
            date: 'June 15, 2024',
            description:
                'Social media platforms are powerful tools for connecting with your audience. Discover effective strategies to boost your social media presence and engagement...',
            imageUrl: 'https://images.unsplash.com/photo-1607703703674-df96af81dffa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        },
        {
          title: 'Email Marketing Best Practices',
          date: 'June 10, 2024',
          description: 'Email marketing remains a powerful tool for reaching and engaging customers. Learn the best practices for creating effective email campaigns...',
          imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      },
      {
          title: 'Content Marketing Strategies',
          date: 'June 5, 2024',
          description: 'Content marketing is about creating and sharing valuable content to attract and retain customers. Discover key strategies for successful content marketing...',
          imageUrl: 'https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      },
      {
          title: 'Pay-Per-Click Advertising',
          date: 'May 30, 2024',
          description: 'PPC advertising allows you to pay for top positions on search engines and appear on relevant partner websites. Learn how to create effective PPC campaigns...',
          imageUrl: 'https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      },
      {
        title: 'Affiliate Marketing Insights',
        date: 'May 25, 2024',
        description: 'Affiliate marketing is a performance-based marketing strategy where businesses reward affiliates for driving traffic or sales. Understand how to leverage affiliate marketing...',
        imageUrl: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    {
        title: 'Video Marketing Trends',
        date: 'May 20, 2024',
        description: 'Video marketing has become increasingly popular as a way to engage customers. Explore the latest trends and techniques in video marketing...',
        imageUrl: 'https://images.unsplash.com/photo-1673767296837-8106e1b94d34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    ];

    return (
        <div className="blog-section">
            <div className="container">
                <h2 className="section-title">Our Blog</h2>
                <div className="blog-cards">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-card">
                            <img src={post.imageUrl} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-date">{post.date}</p>
                                <p className="card-text">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogging;
