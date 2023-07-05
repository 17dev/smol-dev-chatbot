# Next.js Chatbot Application

This is a feature-rich, intuitive, and customizable chatbot application built with Next.js, OpenAI gpt-3.5-turbo-16k-0613 models, and Langchain. It allows users to manage multiple chat threads, database configurations, and file uploads, enhancing their chatbot functionalities according to their needs.

## Features

- **Chat Management**: Create, edit, and delete chat threads.
- **Database Configuration**: Connect each chat thread with different databases like MySQL, PostgreSQL, etc.
- **File Uploads**: Upload local files with options to save the files for future use.
- **Responsiveness**: The application is responsive, adapting to different screen sizes and devices.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/nextjs-chatbot-app.git
cd nextjs-chatbot-app
npm install
```

## Setting Up OpenAI API Key

To use the OpenAI functionalities, you need to set up the OpenAI API key. Create a `.env.local` file in the root directory of the project and add the following line:

```bash
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key.

## Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

- [Next.js](https://nextjs.org/)
- [Vercel AI SDK](https://vercel.com/docs/solutions/ai)
- [OpenAI](https://openai.com/)
- [LangChain.js](https://langchain.io/)
- [shadcn/ui](https://shadcn.github.io/ui/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Vercel KV](https://vercel.com/docs/solutions/databases#vercel-kv)

## License

This project is licensed under the MIT License.