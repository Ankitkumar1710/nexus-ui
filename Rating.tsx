'use client'

const reviews = [
  {
    name: 'Amit Verma',
    company: 'Patna Steel Works',
    rating: 5,
    review: 'Very reliable manpower provider. Workers were skilled and punctual.',
    img: '/r1.jpg',
  },
  {
    name: 'Rahul Singh',
    company: 'Delhi Construction Group',
    rating: 5,
    review: 'Fast deployment and professional service. Highly recommended.',
    img: '/r2.jpg',
  },
  {
    name: 'Sanjay Kumar',
    company: 'Medicare Hospital',
    rating: 4,
    review: 'Staff quality was excellent and well trained.',
    img: '/r3.jpg',
  },
  {
    name: 'Vikas Sharma',
    company: 'Noida Logistics Hub',
    rating: 5,
    review: 'Best manpower partner we have worked with.',
    img: '/r4.jpg',
  },
  {
    name: 'Rohit Yadav',
    company: 'Bihar Infra Pvt Ltd',
    rating: 4,
    review: 'Good coordination and fast response team.',
    img: '/r5.jpg',
  },
  {
    name: 'Ankit Mishra',
    company: 'Smart Office Solutions',
    rating: 5,
    review: 'Professional behaviour and quality workforce.',
    img: '/r6.jpg',
  },
]

const Rating = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-red-50 dark:from-black dark:via-[#0f0f0f] dark:to-black">

      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Client <span className="text-brand">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-4"></div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div className="flex gap-6 animate-scroll">

            {[...reviews, ...reviews].map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[300px]
                  bg-white dark:bg-[#141414]
                  rounded-xl p-5
                  shadow-md
                  border border-gray-200 dark:border-gray-700
                "
              >

                {/* PROFILE */}
                <div className="flex items-center gap-3 mb-3">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.company}
                    </p>
                  </div>

                </div>

                {/* STARS */}
                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.review}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Rating
