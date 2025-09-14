export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4"></h1>
          <p className="text-xl text-gray-600 mb-8"></p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              React Router와 TypeScript로 구축된 현대적인 웹 애플리케이션입니다.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                시작하기
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors">
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
