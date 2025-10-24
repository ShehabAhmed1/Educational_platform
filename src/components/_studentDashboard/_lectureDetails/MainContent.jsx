import { FaFileAlt, FaDownload } from "react-icons/fa";
//import videoTest from "../../../assets/imgs/Screen Recording 2025-05-01 162528.mp4";
import LectureContent from "./LectureContent";
import VideoPlayer from "./VideoPlayer";

function MainContent() {
  // ده المفروض جاي من الباك اند
  const mainContent = {
    lectureTitle: "شرح الدعامة",
    summary:
      "تعلم أساسيات تطوير الواجهات الأمامية باستخدام HTML و CSS و JavaScript. هذا الكورس مصمم للمبتدئين ويغطي جميع المفاهيم الأساسية مع تطبيقات عملية.",
    materials: [
      {
        id: 1,
        name: "شرح الدعامة",
        type: "فيديو",
        size: "10 دقائق",
      },
      {
        id: 2,
        name: "شرح الدعامة",
        type: "فيديو",
        size: "10 دقائق",
      },
      {
        id: 3,
        name: "شرح الدعامة",
        type: "فيديو",
        size: "10 دقائق",
      },
    ],
  };

  return (
    <div className="mainContent flex flex-col lg:flex-row gap-6">
      <div className="space-y-6 bg-bg-secondary border border-border rounded-lg overflow-hidden p-6  flex-1">
        {/* <VideoPlayer src={videoTest} poster={""} /> */}
        <iframe
          src="https://www.youtube.com/embed/H-Sqw_HV6eQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-[300px] md:h-[500px] bg-black rounded-md"
        />

        {/* عنوان المحاضرة + الملخص */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-text-main">
            {mainContent.lectureTitle}
          </h2>
          <p className="text-[var(--color-text-main)] leading-relaxed">
            {mainContent.summary}
          </p>
        </div>

        {/* المواد التعليمية */}
        <div>
          <h3 className="mb-3 text-text-main font-medium">المواد التعليمية</h3>
          <div className="space-y-2">
            {mainContent.materials.map((material) => (
              <div
                key={material.id}
                className="p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-sm"
              >
                <div className="flex flex-col items-start  md:flex-row md:items-center justify-between gap-4 ">
                  {/* أيقونة الملف + معلومات المادة */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-[var(--color-decorate2)] rounded-lg flex items-center justify-center shrink-0">
                      <FaFileAlt className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="truncate text-text-main font-medium">
                        {material.name}
                      </p>
                      <p className="text-sm text-text-muted">
                        {material.type} • {material.size}
                      </p>
                    </div>
                  </div>

                  {/* زر التحميل */}
                  <button className="flex items-center gap-1 border border-border rounded-md px-3 py-1.5 text-sm hover:bg-decorate2 transition-colors shrink-0 text-primary dark:text-text-main cursor-pointer">
                    <FaDownload className="w-4 h-4 " />
                    تحميل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LectureContent />
    </div>
  );
}

export default MainContent;
