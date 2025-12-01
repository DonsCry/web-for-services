# 📤 GitHub Upload Guide

Panduan lengkap untuk upload project ke GitHub.

## 🔧 Persiapan

### 1. Install Git (jika belum)
Download dari: https://git-scm.com/downloads

### 2. Konfigurasi Git (first time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 📸 Tambahkan Screenshots (Opsional tapi Recommended)

Sebelum upload, tambahkan screenshots ke folder `screenshots/`:
- `homepage.png` - Screenshot homepage
- `services.png` - Screenshot services page
- `about.png` - Screenshot about page

Atau hapus bagian screenshots di README.md jika tidak mau pakai.

## 🚀 Upload ke GitHub

### Step 1: Buat Repository Baru di GitHub
1. Buka https://github.com
2. Klik tombol **"New"** atau **"+"** → **"New repository"**
3. Isi nama repository (contoh: `skyline-corps-portfolio`)
4. Pilih **Public** atau **Private**
5. **JANGAN** centang "Initialize with README" (kita sudah punya)
6. Klik **"Create repository"**

### Step 2: Initialize Git di Project
Buka terminal/command prompt di folder project, lalu jalankan:

```bash
# Masuk ke folder project
cd c:\xampp\htdocs\projectweb\newweb\modern-website

# Initialize git repository
git init

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit: Advanced tech portfolio with holographic effects"
```

### Step 3: Connect ke GitHub
Ganti `yourusername` dan `repository-name` dengan username GitHub dan nama repo kamu:

```bash
# Tambahkan remote repository
git remote add origin https://github.com/yourusername/repository-name.git

# Rename branch ke main (jika perlu)
git branch -M main

# Push ke GitHub
git push -u origin main
```

### Step 4: Update README.md
Setelah upload, edit `README.md` di GitHub atau lokal:
1. Ganti `yourusername` dengan username GitHub kamu
2. Ganti link demo jika sudah deploy
3. Update screenshot paths jika sudah upload screenshots
4. Commit dan push lagi:
```bash
git add README.md
git commit -m "Update README with correct links"
git push
```

## 🌐 Deploy Online (Opsional)

### Deploy ke Vercel (Recommended - Gratis)
1. Buka https://vercel.com
2. Sign in dengan GitHub
3. Klik **"Import Project"**
4. Pilih repository kamu
5. Klik **"Deploy"**
6. Tunggu beberapa menit, done! ✅

### Deploy ke Netlify
1. Buka https://netlify.com
2. Drag & drop folder project atau connect GitHub
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

## 📝 Update Project di Masa Depan

Setiap kali ada perubahan:
```bash
git add .
git commit -m "Describe your changes here"
git push
```

## ⚠️ Troubleshooting

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/repo-name.git
```

### Error: "failed to push"
```bash
git pull origin main --rebase
git push
```

## 🎉 Selesai!

Repository kamu sekarang sudah online di GitHub!

Share link repository kamu:
`https://github.com/yourusername/repository-name`

---

**Tips:**
- Tambahkan screenshot yang bagus untuk menarik perhatian
- Buat demo video (GIF) jika memungkinkan
- Update README dengan link demo live jika sudah deploy
- Tambahkan badges untuk tech stack
- Star repository sendiri untuk boost visibility 😄
