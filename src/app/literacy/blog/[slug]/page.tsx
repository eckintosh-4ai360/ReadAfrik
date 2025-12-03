'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { 
  ArrowLeftIcon as ArrowLeft,
  ClockIcon as Clock,
  EyeIcon as Eye,
  CalendarIcon as Calendar,
  UserIcon as User,
  ShareIcon as Share,
  BookmarkIcon as Bookmark
} from '@heroicons/react/24/outline';

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // In a real app, this would fetch data based on the slug
  const blogPosts: { [key: string]: any } = {
    'effective-reading-strategies-elementary': {
      title: 'Effective Reading Strategies for Elementary Students',
      author: 'Dr. Sarah Johnson',
      date: '2025-07-10',
      readTime: '5 min read',
      views: 1250,
      category: 'Teaching Strategies',
      image: '📚',
      content: `
        <p>Developing strong reading foundations in elementary students is crucial for their academic success. This comprehensive guide explores proven techniques that help young learners build essential reading skills.</p>

        <h2>Understanding Reading Development</h2>
        <p>Reading development in elementary years follows predictable stages. Students progress from learning to decode words to reading for meaning. Understanding these stages helps teachers provide appropriate support at each level.</p>

        <h2>Key Strategies for Success</h2>
        
        <h3>1. Phonics Instruction</h3>
        <p>Systematic phonics instruction remains one of the most effective methods for teaching reading. Students learn letter-sound relationships and how to blend sounds to read words. This foundational skill enables independent reading.</p>

        <h3>2. Building Fluency</h3>
        <p>Reading fluency develops through repeated practice with appropriately leveled texts. Encourage students to read the same passage multiple times, focusing on accuracy, speed, and expression. Partner reading and reader's theater activities make fluency practice engaging.</p>

        <h3>3. Vocabulary Development</h3>
        <p>Explicit vocabulary instruction accelerates reading comprehension. Teach high-frequency words directly, and help students develop strategies for learning new words independently. Word walls, context clues, and morphology studies all support vocabulary growth.</p>

        <h3>4. Comprehension Strategies</h3>
        <p>Model comprehension strategies explicitly: predicting, questioning, visualizing, and summarizing. Think-alouds demonstrate how proficient readers make meaning from text. Gradually release responsibility to students as they practice these strategies.</p>

        <h2>Creating a Literacy-Rich Environment</h2>
        <p>The classroom environment significantly impacts reading development. Provide diverse, engaging texts at various levels. Create cozy reading spaces that invite students to read for pleasure. Display student work and celebrate reading achievements.</p>

        <h2>Differentiation and Support</h2>
        <p>Not all students progress at the same pace. Use assessment data to group students flexibly and provide targeted instruction. Small group work allows teachers to address specific needs while maintaining high expectations for all learners.</p>

        <h2>Home-School Connection</h2>
        <p>Partner with families to extend reading practice beyond school hours. Share strategies families can use at home. Provide access to books through lending libraries or digital resources. Regular communication about student progress strengthens the home-school connection.</p>

        <h2>Conclusion</h2>
        <p>Effective reading instruction combines explicit teaching, meaningful practice, and genuine enthusiasm for reading. By implementing these evidence-based strategies, teachers can help all students develop into confident, capable readers.</p>
      `
    },
    'digital-literacy-modern-classroom': {
      title: 'Digital Literacy in the Modern Classroom',
      author: 'Prof. Michael Chen',
      date: '2025-07-08',
      readTime: '7 min read',
      views: 980,
      category: 'Technology',
      image: '💻',
      content: `
        <p>Technology integration in literacy instruction offers exciting possibilities while presenting unique challenges. This article explores how to effectively blend digital tools with core literacy skills.</p>

        <h2>Defining Digital Literacy</h2>
        <p>Digital literacy extends beyond basic computer skills. Students must learn to read, evaluate, and create information across digital platforms. This includes understanding how digital texts differ from print and developing critical thinking skills for online information.</p>

        <h2>Selecting Appropriate Tools</h2>
        <p>Not all technology enhances learning. Choose tools that align with instructional goals and support literacy development. Consider ease of use, accessibility features, and how tools promote student engagement with text.</p>

        <h2>Best Practices for Implementation</h2>
        
        <h3>Balance Digital and Print</h3>
        <p>Both formats have value. Students need experience with traditional print literacy while developing digital competencies. Vary instructional materials to include both formats strategically.</p>

        <h3>Teach Digital Citizenship</h3>
        <p>Help students navigate online spaces responsibly. Address topics like information evaluation, online safety, and ethical use of digital resources. These skills are essential for lifelong learning.</p>

        <h3>Foster Creation, Not Just Consumption</h3>
        <p>Move beyond passive technology use. Engage students in creating digital content: writing blogs, recording podcasts, producing videos. Creation deepens understanding and develops valuable skills.</p>

        <h2>Assessment in Digital Environments</h2>
        <p>Traditional assessment methods may need adaptation for digital literacy. Consider how to evaluate multimodal compositions and digital projects while maintaining rigorous standards for literacy skills.</p>

        <h2>Looking Forward</h2>
        <p>Technology will continue evolving. Focus on developing adaptable learners who can transfer literacy skills across platforms. The goal remains the same: creating proficient readers and writers prepared for their futures.</p>
      `
    },
    'building-vocabulary-context-clues': {
      title: 'Building Vocabulary Through Context Clues',
      author: 'Lisa Rodriguez',
      date: '2025-07-05',
      readTime: '4 min read',
      views: 1450,
      category: 'Vocabulary',
      image: '🔤',
      content: `
        <p>Strong vocabulary is essential for reading comprehension. Teaching students to use context clues empowers them to learn new words independently while reading.</p>

        <h2>Types of Context Clues</h2>
        
        <h3>Definition Clues</h3>
        <p>Sometimes the text directly defines a word. Signal words like "is," "means," or "refers to" often introduce definitions embedded in sentences.</p>

        <h3>Synonym Clues</h3>
        <p>Authors may use a familiar word with similar meaning near the unknown word. Teaching students to look for these synonyms helps them infer meaning.</p>

        <h3>Antonym Clues</h3>
        <p>Contrast words like "but," "however," or "unlike" signal that an opposite meaning is provided, helping students understand the target word.</p>

        <h3>Example Clues</h3>
        <p>Examples following unknown words provide concrete instances that clarify meaning. Words like "such as," "including," or "for example" introduce these clues.</p>

        <h2>Teaching Context Clue Strategies</h2>
        <p>Model the thinking process explicitly. Read passages aloud and demonstrate how to identify and use context clues. Create anchor charts showing different clue types with examples.</p>

        <h2>Practice Activities</h2>
        <p>Provide graduated practice opportunities. Start with heavily scaffolded examples where clues are obvious. Gradually increase complexity as students gain confidence.</p>

        <h2>Beyond Context Clues</h2>
        <p>While context clues are valuable, they're not foolproof. Teach students to verify meanings using dictionaries and to recognize when context doesn't provide enough information.</p>

        <h2>Making It Stick</h2>
        <p>Encourage students to maintain vocabulary journals where they record new words discovered through context clues. Regular review and application in writing reinforces learning.</p>
      `
    }
  };

  const post = blogPosts[slug] || {
    title: 'Blog Post Not Found',
    author: 'Unknown',
    date: '2025-01-01',
    readTime: '0 min read',
    views: 0,
    category: 'General',
    image: '📝',
    content: '<p>This blog post is currently being written. Check back soon!</p>'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link href="/literacy/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title & Header */}
            <div className="mb-8">
              <div className="text-6xl mb-6 text-center">{post.image}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                <Bookmark className="h-5 w-5" />
                <span>Save</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <Share className="h-5 w-5" />
                <span>Share</span>
              </motion.button>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-ul:my-6 prose-li:text-gray-600 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/literacy/blog" className="group">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      More from {post.category}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Explore related articles in this category</p>
                  </div>
                </Link>
                <Link href="/literacy" className="group">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      Literacy Resources
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Browse our complete literacy collection</p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;

