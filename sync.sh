#!/bin/bash
# Tüm değişiklikleri GitHub'a tek komutla gönder
# Kullanım: ./sync.sh  veya  ./sync.sh "commit mesajı"

MSG="${1:-"chore: otomatik güncelleme $(date '+%Y-%m-%d %H:%M')"}"

echo "📦 Değişiklikler hazırlanıyor..."
git add -A

if git diff --cached --quiet; then
  echo "ℹ️  Gönderirlecek değişiklik yok."
  exit 0
fi

echo "💾 Commit oluşturuluyor: $MSG"
git commit -m "$MSG"
# post-commit hook push'u otomatik yapacak
