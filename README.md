# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- **About Me Section** - Introduction and background
- **University Journey** - Timeline of education and experience
- **Resume Download** - Easy PDF download
- **Projects Showcase** - Display your work with descriptions and images
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Smooth Navigation** - Seamless scrolling between sections

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS3 with responsive design
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/farazahmed39/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build for Production

```bash
npm run build
```

## Customization

### Update Your Information

1. **Edit your name and title** in `src/components/Hero.jsx`
2. **Update about section** in `src/components/About.jsx`
3. **Add your projects** in `src/data/projects.js`
4. **Update journey timeline** in `src/data/journey.js`
5. **Add social links** in `src/components/Footer.jsx`

### Add Your Photo

Place your photo in `public/` folder and update the path in `src/components/About.jsx`

### Add Project Images

Place project images in `public/projects/` and update paths in `src/data/projects.js`

### Resume

Place your resume as `resume.pdf` in the `public/` folder for download functionality.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project" and select this repository
5. Click "Deploy"
6. Your site will be live!

### Connect Custom Domain

1. Get a free domain from [Freenom.com](https://www.freenom.com)
2. In Vercel, go to Project Settings → Domains
3. Add your domain
4. Update DNS settings at Freenom with Vercel's nameservers
5. Wait 24-48 hours for DNS propagation

## Live Demo

- **Vercel:** Your deployment URL
- **Custom Domain:** Your domain from Freenom

## License

This project is open source and available under the MIT License.

## Author

**Faraz Ahmed**
- GitHub: [@farazahmed39](https://github.com/farazahmed39)

---

Made with ❤️ using React & Vite
