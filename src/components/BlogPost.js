import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const BlogPost = ({ post }) => {
 
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  
  return (
    <div  ref={ref}>
      <motion.div  initial={{ opacity: 0 }}
  animate={{ opacity: inView ? 1 : 0 ,
  y: inView ? 0: '100vh'}}
  transition={{ duration: 3 }} className="bg-teal-400 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out" >
      <div  className="relative h-0 pb-3/4">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={post.url}
          alt={post.title}
          width={600}
          height={400}
        />
      </div>
      <div  className="p-4">
        <Link  href={`/blog/${post.slug}`} legacyBehavior>
          <a  className="text-xl font-semibold mb-2">{post.title}</a>
        </Link>
        <p className="text-gray-600 text-base">{post.body}</p>
      </div>
    </motion.div>

    </div>
    
  );
};

export default BlogPost;
