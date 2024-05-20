# Next.js MongoDB TailwindCSS Starter

This is a starter boilerplate for building a web application using Next.js, MongoDB, and Tailwind CSS. It provides a basic setup to get you up and running quickly with these technologies.

## Features

- **Next.js** for server-side rendering and static site generation
- **MongoDB** for a NoSQL database
- **Tailwind CSS** for utility-first CSS styling
- **ESLint** and **Prettier** for code quality and consistency

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/faisalamin001/nextjs-mongodb-tailwind-starter.git
   ```

2. Navigate to the project directory:

   ```sh
   cd nextjs-mongodb-tailwind-starter
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

## Usage

### Running the Development Server

1. Start the development server:

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a pull request
