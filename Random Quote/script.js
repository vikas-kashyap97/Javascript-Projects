const btn = document.getElementById('btn')
const output = document.querySelector(".output")

let quote = [
    "Inhale courage, exhale fear; every breath can bring you closer to your dreams.",
    "Dream big, hustle harder; your determination is the key to unlocking your potential.",
    "Small steps lead to giant leaps; every journey begins with a single step forward.",
    "Growth begins at the edge of your comfort zone; embrace the challenges that come your way.",
    "Strive for progress, not perfection; every small improvement counts towards your success.",
    "Create the life you imagine; the power to shape your destiny lies within you.",
    "Turn setbacks into comebacks; resilience is the secret ingredient for success.",
    "Stars need darkness to shine; remember that challenges often bring out your brightest self.",
    "Live fully, love deeply; make every moment count in this beautiful journey of life.",
    "Adventure awaits, go find it; the world is full of wonders just waiting for you to explore.",
    "Choose kindness, always; a simple act of kindness can change someone's day completely.",
    "Your vibe attracts your tribe; surround yourself with those who uplift and inspire you.",
    "Bloom where you're planted; thrive in every situation, regardless of your circumstances.",
    "Make today your masterpiece; every day is a blank canvas waiting for your creativity.",
    "Stay wild, moonchild; embrace your uniqueness and let your spirit soar.",
    "The best is yet to come; hold on to hope and keep striving for your dreams.",
    "Brave spirit, gentle heart; strength and compassion can coexist beautifully.",
    "Trust the timing of your life; everything happens for a reason, even if it's not clear now.",
    "Find joy in the journey; happiness is often found in the small moments along the way.",
    "You are your only limit; break free from self-doubt and embrace your limitless potential.",
    "Radiate positivity every day; your outlook can influence the world around you.",
    "Embrace the beauty of change; every transformation is a chance for new beginnings.",
    "Courage over comfort, always; growth comes from stepping outside of your comfort zone.",
    "Create your own sunshine; be the light that brightens your path and others’ paths.",
    "Stay grounded, stay grateful; appreciation for what you have brings peace to your heart.",
    "Live in the moment; the present is a precious gift that should never be taken for granted.",
    "Follow your heart; it knows the way to your true desires and passions.",
    "Celebrate your victories, no matter how small; each one brings you closer to your goals.",
    "The universe has your back; trust in the process and have faith in your journey.",
    "Let your dreams be your wings; they will lift you higher than you ever imagined.",
    "Find beauty in every struggle; challenges often hold the greatest lessons for growth.",
    "You are capable of amazing things; believe in your strength and take bold steps forward.",
    "Embrace uncertainty; it often leads to unexpected opportunities and exciting adventures.",
    "Your thoughts shape your reality; cultivate a positive mindset to create a better life.",
    "Dare to live the life you've always wanted; take the leap of faith and chase your dreams.",
    "Take a deep breath and trust the process; everything will unfold as it should.",
    "Surround yourself with positivity; the energy of those around you can elevate your spirit.",
    "Nurture your passions; they are the fuel that will keep your spirit alive and thriving.",
    "Create moments that matter; cherish the connections you make with others along the way.",
    "The journey of a thousand miles begins with one step; take that step today.",
    "Cultivate resilience; it is the strength to rise after every fall.",
    "Your story is unique; embrace it and let it inspire others along their paths.",
    "Every day is a new opportunity to grow; seize the chance to be a better version of yourself.",
    "Invest in yourself; the most valuable asset you will ever have is you.",
    "Let your heart be your compass; it will guide you to where you truly belong.",
    "Dream without limits; your imagination is the doorway to endless possibilities.",
    "Live authentically; be true to yourself and the world will respond in kind.",
    "Seek adventure in every moment; life is a series of beautiful experiences waiting to be discovered."
]



btn.addEventListener("click",()=> {
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random]
})



