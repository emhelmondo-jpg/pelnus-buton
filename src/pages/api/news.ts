import type { NextApiRequest, NextApiResponse } from 'next';

const news = [
  {
    id: 1,
    title: 'Penerimaan Mahasiswa Baru Tahun Ajaran 2026/2027',
    excerpt: 'ITPPN Buton membuka pendaftaran mahasiswa baru gelombang pertama.',
    image_url: '/pensma.png',
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Seminar Nasional Teknologi Informasi',
    excerpt: 'Prodi Informatika menyelenggarakan seminar nasional dengan tema AI dan Masa Depan.',
    image_url: 'https://picsum.photos/seed/seminar/600/400',
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Kerjasama Internasional dengan Universitas Terkemuka',
    excerpt: 'ITPPN menjalin kerjasama untuk program pertukaran pelajar dan penelitian bersama.',
    image_url: 'https://picsum.photos/seed/meeting/600/400',
    created_at: new Date().toISOString(),
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(news);
}
