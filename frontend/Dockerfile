# FROM nginx:alpine
# COPY index.html /usr/share/nginx/html/index.html
# EXPOSE 80

# Use an official Nginx image
FROM nginx:latest

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your static files (HTML, JS, CSS) to Nginx's default directory
COPY . /usr/share/nginx/html

# Expose port 80 for serving the frontend
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
