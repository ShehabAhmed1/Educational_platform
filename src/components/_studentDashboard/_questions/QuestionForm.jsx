import React, { useState } from "react";
import { FaPaperclip } from "react-icons/fa";

const courses = [
  { id: "1", name: "الرياضيات - ا /مجد الدين" },
  { id: "2", name: "الفيزياء - م/محمد حمدان" },
  { id: "3", name: "الكيمياء - د/مني فيصل" },
  { id: "4", name: "الأحياء - د/احمد ايمن" },
];

function QuestionForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    courseId: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.courseId || !formData.title || !formData.description) {
      alert("من فضلك املأ جميع الحقول.");
      return;
    }

    onSubmit(formData);
    alert("تم إرسال سؤالك بنجاح!");

    setFormData({
      courseId: "",
      title: "",
      description: "",
    });

    onClose();
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-semibold mb-2 text-right">إرسال سؤال</h2>
        <p className="text-gray-500 mb-4 text-right">
          أرسل سؤالك إلى المدرس للحصول على المساعدة في دروسك.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* اختيار الكورس */}
          <div>
            <label className="block font-medium mb-1 text-right">
              الكورس / المدرس
            </label>
            <select
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.courseId}
              onChange={(e) =>
                setFormData({ ...formData, courseId: e.target.value })
              }
            >
              <option value="">اختر الكورس...</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {/* عنوان السؤال */}
          <div>
            <label className="block font-medium mb-1 text-right">
              عنوان السؤال
            </label>
            <input
              type="text"
              placeholder="مثلاً: أحتاج شرحًا في المعادلات التربيعية..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 text-right"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          {/* نص السؤال */}
          <div>
            <label className="block font-medium mb-1 text-right">
              تفاصيل السؤال
            </label>
            <textarea
              placeholder="اشرح سؤالك بالتفصيل هنا..."
              className="w-full border rounded-md px-3 py-2 min-h-[150px] resize-none focus:outline-none focus:ring focus:ring-blue-200 text-right"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* رفع ملف */}
          <div className="flex items-center gap-2 justify-end">
            <label
              htmlFor="file"
              className="flex items-center gap-2 border px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
            >
              <FaPaperclip className="text-gray-600" />
              إرفاق ملف
            </label>
            <input type="file" id="file" name="file" className="hidden" />
            <span className="text-xs text-gray-500">
              اختياري: يمكنك رفع صورة أو ملف
            </span>
          </div>

          {/* الأزرار */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border rounded-md py-2 hover:bg-gray-100 transition"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
            >
              إرسال السؤال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
