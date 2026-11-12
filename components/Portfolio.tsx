import React, { useState } from 'react';

interface WorkItem {
  title: string;
  category: string;
  img?: string;
  videoUrl?: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [itemsToShow, setItemsToShow] = useState(5);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const categories = ['All', 'YouTube', 'SEO', 'Ads', 'Dashboards'];

  // YouTube URL থেকে Video ID বের করার ফাংশন
  const getYouTubeId = (url: string) => {
    const regExp = /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const works: WorkItem[] = [
    {
      title: 'YouTube Video SEO',
      category: 'SEO',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_e5PqB3stHLXQnAqxhv3Kfr5mBv8mlnS3uDglxmySSue-Sn2Q2n134EbEfIiZxPPLlCA-k5OOLpa2OwI3RoTTXvKBQrG2tUfYu20u2fo9jC2TvQNjJAvs9PrjAGAwgCP-unB0PbsqhQhY2YFy-CFl1jUi_VDxQZ5fVJfsQbhwtiL3_JsP_SiIDq6EDOw/s320/Screenshot_4.png',
    },
    {
      title: 'YouTube Video SEO (Video Review)',
      category: 'SEO',
      videoUrl: 'https://youtube.com/shorts/4bME65k3JzE?si=MJBRazPx_gXb-06q',
    },
    {
      title: 'Google Ads Campaign',
      category: 'Ads',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXtBOxfj_u1cv3QshL7mcN7AZpdzElj8X93mjwE_PSwd5KakoJ-DbUuvu-EJH9BXd0f8yMbVxebfMWqvyJSMY03VhzZilZ0I3iAIZ8gtE8QmW-UvWLMnEFxuoLq-Gv0N-aymqYLD7PE1kIEqtxKl2lZnibaUw_77gHkLb1FpsDf0HVofGP1FplT8ow35E/s320/Screenshot_9.png',
    },
    {
      title: 'YouTube Channel Access.',
      category: 'Channel Access',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicgCEyR8nGR8d1HnggI4jBWti9nsRfzoiuP4EfsR8nkA5DzmmitvY6_in8ShLvodZMy3fsdhfwJ5Bs3EOEvQ-BBex7TnNztQ1w1FwkI9WKFIu77LIQRTZSChdLvxVUebGpyPbZcF3UxZGdmv5GBI-LJy0aTh5y6D8J12qCNoXvh52QcQ5ru0u0uHq1d6M/s320/cf96ae4f-a222-42ce-aca4-3ecf39b40526.jpg',
    },
    {
      title: 'YouTube Channel Access',
      category: 'Channel Access',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieXiTjyeQ9HM5x4k5eRN8wHCptWYVayfdXLI5Y5GyspXIBXXXlwxX7N13X6oPxU3p-hQ4TWAAeJu9h1HBXBO6zjPfGYH2YYQJRBxbd6jeP2MKm-fze7tWpmJA1uaeMQl9Umzath3YbQoZvgabXHW98XJh55yMbxoPB0uAvDNlEjNGwa0uCKkWgBmOfnFM/s320/da9423d7-e26d-401c-89ef-369f01a84574.jpg',
    },
    {
      title: 'Payment Proof',
      category: 'Dashboards',
      img: '
