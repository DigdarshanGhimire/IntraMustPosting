"use client"

// pages/create-post.tsx
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { PlusCircle, Image as ImageIcon, Type, FileText, List, Save, Trash2 } from 'lucide-react';

// Content block types
type BlockType = 'title' | 'description' | 'image';

interface ContentBlock {
  id: string;
  type: BlockType;
  content: string;
  sectionTitle?: string;
  inTableOfContents?: boolean;
}

const CreatePostPage: React.FC = () => {
  const [postTitle, setPostTitle] = useState<string>('');
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [showBlockMenu, setShowBlockMenu] = useState<boolean>(false);
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add a new content block
  const addBlock = (type: BlockType) => {
    const newBlock: ContentBlock = {
      id: uuidv4(),
      type,
      content: '',
      inTableOfContents: type === 'title'
    };
    setBlocks([...blocks, newBlock]);
    setShowBlockMenu(false);
  };

  // Update a block's content
  const updateBlockContent = (id: string, content: string) => {
    setBlocks(
      blocks.map(block => 
        block.id === id ? { ...block, content } : block
      )
    );
  };

  // Update a block's section title (for TOC)
  const updateSectionTitle = (id: string, sectionTitle: string) => {
    setBlocks(
      blocks.map(block => 
        block.id === id ? { ...block, sectionTitle } : block
      )
    );
  };

  // Toggle if a block should be in the TOC
  const toggleInTableOfContents = (id: string) => {
    setBlocks(
      blocks.map(block => 
        block.id === id ? { ...block, inTableOfContents: !block.inTableOfContents } : block
      )
    );
  };

  // Handle image upload
  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateBlockContent(id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete a block
  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  // Move block up or down
  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(block => block.id === id);
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === blocks.length - 1)) {
      return;
    }
    
    const newBlocks = [...blocks];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  // Generate table of contents
  const tableOfContents = blocks
    .filter(block => block.inTableOfContents)
    .map(block => ({
      id: block.id,
      title: block.sectionTitle || block.content
    }));

  // Save post to database
  const savePost = () => {
    const post = {
      title: postTitle,
      content: blocks,
      createdAt: new Date().toISOString()
    };
    console.log('Saving post:', post);
    // This is where you would send the post to your API
    alert('Post saved! Check console for details.');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">Create New Blog Post</h1>
          <button 
            onClick={savePost}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            <Save size={18} />
            Save Post
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex">
        {/* Table of Contents Sidebar */}
        <aside className="w-64 mr-8">
          <div className="bg-gray-800 p-4 rounded-md sticky top-4">
            <h2 className="text-xl font-bold text-green-400 mb-4">Table of Contents</h2>
            {tableOfContents.length > 0 ? (
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={item.id} className="text-gray-300 hover:text-green-400">
                    <a 
                      href={`#${item.id}`} 
                      className="block p-2 hover:bg-gray-700 rounded truncate"
                    >
                      {item.title || `Section ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Add section titles to build your table of contents</p>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Post Title Input */}
          <div className="mb-6">
            <label htmlFor="post-title" className="block text-sm font-medium text-gray-400 mb-1">
              Post Title
            </label>
            <input
              id="post-title"
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Enter your post title"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Content Blocks */}
          <div className="space-y-6">
            {blocks.map((block) => (
              <div 
                key={block.id} 
                id={block.id}
                className="bg-gray-800 p-4 rounded-md border border-gray-700 hover:border-green-500 transition-colors"
              >
                {/* Block Header with Controls */}
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    {block.type === 'title' && <Type size={16} className="text-green-400" />}
                    {block.type === 'description' && <FileText size={16} className="text-green-400" />}
                    {block.type === 'image' && <ImageIcon size={16} className="text-green-400" />}
                    <span className="text-sm font-medium capitalize">{block.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {block.type === 'title' && (
                      <div className="flex items-center mr-2">
                        <label className="text-xs mr-2">In TOC:</label>
                        <input
                          type="checkbox"
                          checked={block.inTableOfContents}
                          onChange={() => toggleInTableOfContents(block.id)}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-600 rounded"
                        />
                      </div>
                    )}
                    <button 
                      onClick={() => moveBlock(block.id, 'up')}
                      className="text-gray-400 hover:text-green-400 p-1"
                    >
                      ↑
                    </button>
                    <button 
                      onClick={() => moveBlock(block.id, 'down')}
                      className="text-gray-400 hover:text-green-400 p-1"
                    >
                      ↓
                    </button>
                    <button 
                      onClick={() => deleteBlock(block.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Block Content */}
                {block.type === 'title' && (
                  <div>
                    <input
                      type="text"
                      value={block.content}
                      onChange={(e) => updateBlockContent(block.id, e.target.value)}
                      placeholder="Enter section title"
                      className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    {block.inTableOfContents && (
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">
                          TOC Display Name (optional):
                        </label>
                        <input
                          type="text"
                          value={block.sectionTitle || ''}
                          onChange={(e) => updateSectionTitle(block.id, e.target.value)}
                          placeholder="Leave blank to use title above"
                          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                      </div>
                    )}
                  </div>
                )}

                {block.type === 'description' && (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                    placeholder="Enter your content here..."
                    rows={4}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                )}

                {block.type === 'image' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-1 px-3 rounded-md text-sm flex items-center gap-2"
                      >
                        <ImageIcon size={14} />
                        Select Image
                      </button>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(e) => handleImageUpload(block.id, e)}
                        className="hidden"
                      />
                    </div>
                    
                    {block.content && (
                      <div className="relative bg-gray-700 p-2 rounded-md">
                        <img 
                          src={block.content} 
                          alt="Uploaded content" 
                          className="max-h-96 mx-auto rounded"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Add New Block Button */}
            <div className="relative">
              <button
                onClick={() => setShowBlockMenu(!showBlockMenu)}
                className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md border border-dashed border-gray-600 hover:border-green-500 transition-colors flex items-center justify-center gap-2"
              >
                <PlusCircle size={18} className="text-green-500" />
                Add Content Block
              </button>

              {showBlockMenu && (
                <div className="absolute left-0 right-0 mt-2 bg-gray-800 rounded-md shadow-lg border border-gray-700 z-10">
                  <ul>
                    <li>
                      <button
                        onClick={() => addBlock('title')}
                        className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-200"
                      >
                        <Type size={18} className="text-green-400" />
                        Title/Heading
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => addBlock('description')}
                        className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-200"
                      >
                        <FileText size={18} className="text-green-400" />
                        Text/Description
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => addBlock('image')}
                        className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-200"
                      >
                        <ImageIcon size={18} className="text-green-400" />
                        Image
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreatePostPage;