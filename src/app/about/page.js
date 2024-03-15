import DefaultLayout from '../../layouts/DefaultLayout';
import LogoClouds from '@/components/LogoClouds';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <DefaultLayout>
      <div className='about-page'>
        {/* Section 1 */}
        <div className='grid min-h-full grid-cols-2 gap-3 justify-center px-6 py-12 lg:px-12'>
          <div className='flex flex-col grid-cols-subgrid my-auto gap-6'>
            <h1 className='text-5xl font-extrabold tracking-tight text-slate-900'>We’re changing the way people connect.</h1>
            <span>Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.</span>
          </div>
          <div class="container mx-auto p-4">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div class="grid gap-3">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-3">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-3">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
                    alt=""
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className='grid min-h-full grid-cols-2 gap-3 justify-center px-6 py-12 lg:px-12'>
          <div className='flex flex-col grid-cols-subgrid my-auto gap-6'>
            <h1 className='text-5xl font-semibold tracking-tight text-slate-900'>Our mission</h1>
            <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.

              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.

              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
          </div>
          <div className='container mx-auto p-4'>
            <div className='grid grid-rows-6 grid-flow-col gap-4 text-center'>
              <h1 className='text-5xl font-extralight'>44 million</h1>
              <span>Transactions every 24 hours</span>
              <h1 className='text-5xl font-extralight'>$119 trillion</h1>
              <span>Assets under holding</span>
              <h1 className='text-5xl font-extralight'>46,000+</h1>
              <span>New users annually</span>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className='flex min-h-fullgap-3 justify-center px-6 py-12 lg:px-12'>
          <div className='container mx-auto p-4'>
            <img className="rounded-3xl" src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80' alt="our-value" />
          </div>
        </div>
        {/* Section 4 */}
        <div className='grid grid-cols-2 min-h-full gap-3 justify-center px-6 py-12 lg:px-12'>
          <div className='grid mx-auto p-4 gap-6 '>
            <h1 className='text-5xl font-semibold tracking-tight text-slate-900'>Our mission</h1>
            <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
          </div>
        </div>
        {/* Section 5 */}
        <div className='container mx-auto p-4'>
          <div className='grid grid-cols-3 min-h-full gap-3 justify-center px-6 py-12 lg:px-12'>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
          </div>
          <div className='grid grid-cols-3 min-h-full gap-3 justify-center px-6 py-12 lg:px-12'>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
            <div className='grid mx-auto p-4 gap-4'>
              <h1 className='text-xl font-semilight tracking-tight text-slate-900'>Our mission</h1>
              <span>Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</span>
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <LogoClouds />
      </div>
    </DefaultLayout>
  );
};

export default AboutPage;
