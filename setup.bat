@echo off
REM Create folder structure
mkdir src\components
mkdir src\data
mkdir src\styles
mkdir public\projects

REM Create CSS file
(
echo /* Global Styles */
echo * {
echo   margin: 0;
echo   padding: 0;
echo   box-sizing: border-box;
echo }
echo.
echo body {
echo   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
echo   line-height: 1.6;
echo   color: #333;
echo   background-color: #f9f9f9;
echo }
echo.
echo html {
echo   scroll-behavior: smooth;
echo }
echo.
echo .container {
echo   max-width: 1200px;
echo   margin: 0 auto;
echo   padding: 0 20px;
echo }
echo.
echo section {
echo   padding: 80px 0;
echo   border-bottom: 1px solid #eee;
echo }
echo.
echo h1, h2, h3, h4, h5, h6 {
echo   color: #222;
echo   margin: 20px 0 10px;
echo }
echo.
echo h1 { font-size: 3rem; }
echo h2 { font-size: 2.5rem; }
echo h3 { font-size: 1.8rem; }
echo.
echo a {
echo   text-decoration: none;
echo   color: #007bff;
echo   transition: color 0.3s ease;
echo }
echo.
echo button {
echo   cursor: pointer;
echo   border: none;
echo   border-radius: 5px;
echo   padding: 12px 24px;
echo   font-size: 1rem;
echo   transition: all 0.3s ease;
echo }
echo.
echo .btn-primary {
echo   background-color: #007bff;
echo   color: white;
echo }
) > src\index.css

echo Folder structure created!
