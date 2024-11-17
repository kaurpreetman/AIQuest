import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Tag, X } from 'lucide-react';

const questionSchema = z.object({
  title: z.string().min(15, 'Title must be at least 15 characters long'),
  content: z.string().min(30, 'Question details must be at least 30 characters long'),
  tags: z.array(z.string()).min(1, 'Add at least one tag').max(5, 'Maximum 5 tags allowed'),
});

type QuestionForm = z.infer<typeof questionSchema>;

export default function AskQuestionPage() {
  const [tags, setTags] = React.useState<string[]>([]);
  const [tagInput, setTagInput] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionForm>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      tags: [],
    },
  });

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (tags.length < 5) {
        setTags([...tags, tagInput.trim()]);
        setTagInput('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onSubmit = (data: QuestionForm) => {
    console.log({ ...data, tags });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Ask a Question</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Question Title
          </label>
          <input
            {...register('title')}
            type="text"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="What's your question? Be specific."
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Question Details
          </label>
          <textarea
            {...register('content')}
            rows={8}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Provide all the details someone would need to answer your question..."
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 p-2 bg-gray-800 border border-gray-700 rounded-lg">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-blue-300"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="flex-1 min-w-[120px] bg-transparent focus:outline-none"
              placeholder={tags.length < 5 ? "Add up to 5 tags..." : ""}
              disabled={tags.length >= 5}
            />
          </div>
          {errors.tags && (
            <p className="mt-1 text-sm text-red-500">{errors.tags.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post Question
          </button>
        </div>
      </form>
    </div>
  );
}