# Lorem Ipsum

npx vitepress build && mkdir -p temp/yolo && cp -r .vitepress/dist/assets temp/yolo/ && cp .vitepress/dist/*.html .vitepress/dist/*.css .vitepress/dist/*.json temp/ 2>/dev/null || true && rm -rf .vitepress/dist && mv temp .vitepress/distnpx vitepress build && mkdir -p temp/yolo && cp -r .vitepress/dist/* temp/yolo/ && rm -rf .vitepress/dist && mv temp .vitepress/dist