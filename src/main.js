import Layout from './routes/+layout.svelte';
import './tailwind.output.css';

const app = new Layout({
  target: document.body
});

export default app;