"use client"
import { useState } from 'react';
import Image from 'next/image';

type Comment = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
};

export function CommentSection({ postId }: { postId: string }) {
  // In a real app, you would fetch these from an API
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: {
        name: 'Jennifer Lee',
        avatar: '/api/placeholder/50/50',
      },
      content: 'This article provides great insights into how generative AI is evolving. I\'m particularly interested in the ethical considerations around content ownership.',
      date: 'Apr 10, 2025',
      likes: 7,
      replies: [
        {
          id: '1-1',
          user: {
            name: 'Michael Torres',
            avatar: '/api/placeholder/50/50',
          },
          content: 'I agree, the copyright issues are particularly complex when it comes to AI-generated content that was trained on human creative works.',
          date: 'Apr 10, 2025',
          likes: 3,
        },
      ],
    },
    {
      id: '2',
      user: {
        name: 'David Wong',
        avatar: '/api/placeholder/50/50',
      },
      content: 'The section on video generation was most interesting to me. I\'ve been experimenting with some of these tools and the progress in just the last six months has been remarkable.',
      date: 'Apr 9, 2025',
      likes: 4,
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    // In a real app, you would post to an API
    const comment: Comment = {
      id: `new-${Date.now()}`,
      user: {
        name: 'You',
        avatar: '/api/placeholder/50/50',
      },
      content: newComment,
      date: 'Just now',
      likes: 0,
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Discussion ({comments.length})</h3>
      
      {/* New Comment Form */}
      <div className="bg-gray-800 rounded-xl p-6 mb-8">
        <h4 className="text-lg font-bold mb-4">Leave a comment</h4>
        <textarea
          className="w-full bg-gray-700 rounded-lg p-4 min-h-32 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
            className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post Comment
          </button>
        </div>
      </div>
      
      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

// Comment component (used within CommentSection)
function CommentItem({ comment }: { comment: Comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={comment.user.avatar}
            alt={comment.user.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <span className="font-medium">{comment.user.name}</span>
              <span className="text-gray-400 text-sm ml-2">{comment.date}</span>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          
          <p className="my-3">{comment.content}</p>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              {comment.likes}
            </button>
            
            <button 
              onClick={() => setIsReplying(!isReplying)}
              className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Reply
            </button>
          </div>
          
          {/* Reply form */}
          {isReplying && (
            <div className="mt-4">
              <textarea
                className="w-full bg-gray-700 rounded-lg p-3 min-h-24 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setIsReplying(false)}
                  className="px-4 py-1 text-sm bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors rounded"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1 text-sm bg-emerald-500 hover:bg-emerald-600 transition-colors text-gray-900 font-medium rounded disabled:opacity-50"
                  disabled={!replyText.trim()}
                >
                  Reply
                </button>
              </div>
            </div>
          )}
          
          {/* Nested replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-6 space-y-4 pl-4 border-l-2 border-gray-700">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex items-start gap-3">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={reply.user.avatar}
                      alt={reply.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">{reply.user.name}</span>
                        <span className="text-gray-400 text-sm ml-2">{reply.date}</span>
                      </div>
                    </div>
                    
                    <p className="my-2 text-sm">{reply.content}</p>
                    
                    <button className="text-gray-400 hover:text-emerald-400 transition-colors text-xs flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {reply.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}