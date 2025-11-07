// Portfolio configuration file - Central data management for gallery and testimonials
// This file serves as the single source of truth for portfolio content

const portfolioConfig = {
  // Photographer information
  photographer: {
    name: '攝影師名字',
    experience: 10,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: '專業攝影師，擅長人像、婚禮、商業和風景攝影。',
    email: 'photographer@example.com',
    phone: '+886 123-456-7890',
    location: '台灣台北'
  },

  // Contact information
  contact: {
    address: '台灣台北市信義區',
    phone: '+886 (02) 1234-5678',
    email: 'info@photographer.com'
  },

  // Social media links
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com'
  },

  // Statistics/Numbers
  statistics: {
    completedProjects: 150,
    satisfiedClients: 200,
    awards: 15,
    totalPhotos: 5000
  },

  // Hero section slides
  heroSlides: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1514306688772-2f845b81c136?w=1200&h=600&fit=crop',
      title: '捕捉生命的美好',
      subtitle: '用鏡頭記錄每個珍貴瞬間'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop',
      title: '完美的婚禮攝影',
      subtitle: '讓您的愛情故事永遠閃耀'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=600&fit=crop',
      title: '專業人像拍攝',
      subtitle: '展現您最自信迷人的一面'
    }
  ],

  // Gallery images array
  gallery: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1514306688772-2f845b81c136?w=500&h=400&fit=crop',
      title: 'Urban Landscape',
      category: 'Architecture'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=400&fit=crop',
      title: 'Portrait Photography',
      category: 'Portraits'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=500&h=400&fit=crop',
      title: 'Fashion Shot',
      category: 'Fashion'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1500634148957-331acc2e1602?w=500&h=400&fit=crop',
      title: 'Sunset Seascape',
      category: 'Landscape'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1493514789560-586cb221d7eb?w=500&h=400&fit=crop',
      title: 'Wedding Moments',
      category: 'Events'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=400&fit=crop',
      title: 'Nature Close-up',
      category: 'Nature'
    }
  ],

  // Testimonials array with client feedback
  testimonials: [
    {
      id: 1,
      content: '攝影師捕捉到了每一個完美的瞬間！照片絕對令人驚艷，超出了我的所有期望。強烈推薦！',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
      name: 'Sarah Johnson',
      role: '婚禮客戶',
      rating: 5
    },
    {
      id: 2,
      content: '專業、創意十足，非常容易合作。投資組合拍攝效果令人驚豔。絕對會再次聘用！',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
      name: 'Michael Chen',
      role: '企業客戶',
      rating: 5
    },
    {
      id: 3,
      content: '對細節和構圖的眼光獨到。時尚拍攝的結果正是我們品牌宣傳所需的。',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      name: 'Emily Rodriguez',
      role: '時尚品牌',
      rating: 4
    },
    {
      id: 4,
      content: '才華橫溢的攝影師，擁有讓人在鏡頭前感到舒適自在的驚人能力。',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jackson',
      name: 'David Park',
      role: '人像客戶',
      rating: 5
    }
  ],

  // Services offered
  services: [
    {
      id: 1,
      title: '婚禮攝影',
      description: '記錄您人生中最重要的一天，捕捉每個溫馨的時刻。',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: '人像攝影',
      description: '專業人像拍攝，展現您最自信迷人的一面。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: '商業攝影',
      description: '為您的業務提供高質量的商業和產品攝影。',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    }
  ]
};

export default portfolioConfig;
