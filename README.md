## Nasıl çalıştırılır?

### Backend

-cd api
-npm install
-npm run start

### Frontend

-cd client
-npm install
-npm run dev

### Teknoloji seçimleri ve gerekçeleri

## React Router DOM

-React ekosisteminde standart olduğu için tercih ettim

## TailwindCSS

-Hızlı geliştirme ve responsive tasarım kolaylığı olduğu için tercih ettim

## clsx

- Conditional classNameleri kolaylaştırdığı için ve daha temiz kod yazabilmek için tercih ettim

## Zustand

- Basit, hızlı case için mükemmel

## Zustand Persist

- local verileri otomatik sync ettiği için ve hata riski olmadığı için tercih ettim

## Tanstack Query

- Otomatik caching yaptığı için, loading/error state yönetiminin kolay olduğu için ve artık standartlaştığı için tercih ettim

## Axios

- Fetchden kod yazımı daha temiz ve artık standartlaştığı için tercih ettim

## Axios instance

- base url'i tek yerden yönetmek için ve scalability için yazdım

## Sonner

- Hafif, performanslı ve modern durduğu için tercih ettim

### Front'u neden önerilen proje yapısında tasarlamadım?

- Kendi geliştirme tarzımı ve mimari kararlarımı göstermek için

### Case gereksinimlerinin ötesinde geliştirmeler

- GET /products?ids=1,2,3
- Sepete girdiğimde hem localdeki verileri sync etmek için hem de bütün productsları çekmemek veya idlerden loop oluşturup ayrı istekler atmamak için ekledim
