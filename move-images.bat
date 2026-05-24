@echo off
REM Copy images from src/components to public folder
echo Copying images to public folder...

copy "c:\Users\zass\Desktop\portfolio\src\components\logo.png" "c:\Users\zass\Desktop\portfolio\public\logo.png"
copy "c:\Users\zass\Desktop\portfolio\src\components\profile.jpg" "c:\Users\zass\Desktop\portfolio\public\profile.jpg"

echo Images copied successfully!
echo.
echo You can now delete logo.png and profile.jpg from src/components folder
pause
