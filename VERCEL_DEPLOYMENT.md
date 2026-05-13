# Portfolio Deployment Guide - Vercel

## Setup Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio project"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Setup Vercel**
   - Kunjungi https://vercel.com/new
   - Login dengan GitHub account
   - Pilih repository `portfolio`
   - Vercel otomatis detect Vite config
   - Click **Deploy**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (jika belum)
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel
```

### Configuration File (vercel.json)

File ini sudah auto-detect untuk Vite projects. Jika perlu customize:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "env": {
    "VITE_APP_TITLE": "@Portfolio"
  }
}
```

## Project Structure

```
📁 Portfolio
├── 📄 package.json
├── 📄 vite.config.js
├── 📁 src/
│   ├── 📄 App.vue
│   ├── 📄 main.js
│   ├── 📄 style.css
│   ├── 📁 pages/
│   │   ├── About.vue (Profil lengkap)
│   │   ├── Home.vue (Hero section baru)
│   │   ├── Experience.vue (Detail experience dari PDF)
│   │   ├── Projects.vue (4 projects besar)
│   │   └── Contact.vue
│   └── 📁 router/
│       └── index.js
└── 📄 index.html
```

## Content Update dari PDF

### ✅ Pages yang sudah update:
- **Home.vue** - Hero section dengan statistics
- **Experience.vue** - Lengkap: internship, teaching assistant (4 courses), organization
- **Projects.vue** - 4 projects utama: POS Toko Amira, Jakarta Metro Transit (HAKI), E-Katering, Pilihanku

### 📝 Pages yang bisa di-update:
- **About.vue** - Personal info, skills, education
- **Contact.vue** - Contact info, social media links

## Environment Variables (Optional)

Jika ingin add API keys atau config:

```bash
# .env.local (tidak di-commit)
VITE_API_URL=https://api.example.com
```

## Build & Preview Local

```bash
# Build production
npm run build

# Preview build result
npm run preview

# Development server
npm run dev
```

## Domain Setup (Setelah Deploy)

1. Di Vercel Dashboard → Project Settings → Domains
2. Add custom domain atau gunakan default `{project-name}.vercel.app`
3. Config DNS jika pakai custom domain

## Performance Tips

- Vercel auto-optimize dengan edge caching
- Images compressed automatically
- Deploy preview untuk setiap PR
- Analytics built-in

## Next Steps

1. ✅ Update Content dari PDF - DONE
2. ✅ Create Home, Experience, Projects pages - DONE
3. ⏳ Push to GitHub
4. ⏳ Connect dengan Vercel Dashboard
5. ⏳ Add custom domain (optional)
6. ⏳ Setup environment variables (jika ada)

---

**Ready to deploy!** Vercel akan auto-build Vue project dengan Vite dan serve ke `{project}.vercel.app`
