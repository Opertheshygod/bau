const applicationBackdrop = document.getElementById('application_backdrop')
const applicationForm = document.getElementById('application_form')
function showApplication () {
	applicationBackdrop.classList.toggle('hidden')
	setTimeout(() => { applicationForm.classList.toggle('!translate-x-0') }, 100)
	setTimeout(() => { applicationForm.classList.toggle('!translate-y-0') }, 100)
}
function closeApplication () {
	applicationForm.classList.toggle('!translate-x-0')
	applicationForm.classList.toggle('!translate-y-0')
	setTimeout(() => applicationBackdrop.classList.toggle('hidden'), 200)
}
// Тема
class Theme {
	constructor (theme) {
		let self = this
		self.theme = theme
		self.html = document.getElementById('html')
		self.btn = document.getElementById('theme_btn')
		//
		if (self.btn === null) {
			console.error('Theme was not initialized')
			return
		}
		self.btn.addEventListener('click', function () {
			switchTheme()
		})
		//
		function switchTheme () {
			switch (self.theme) {
				case 'light' :
					self.theme = 'dark'
					self.html.classList.add('dark')
					break
				case 'dark' :
					self.theme = 'light'
					self.html.classList.remove('dark')
			}
			//
			const jpgs = document.querySelectorAll('.jpg')
			jpgs.forEach((image) => {
				if (self.theme === 'dark') {
					image.src = image.src.slice(0, -4) + 'd.jpg'
				} else {
					image.src = image.src.slice(0, -5) + '.jpg'
				}
			})
			const pngs = document.querySelectorAll('.png')
			pngs.forEach((image) => {
				if (self.theme === 'dark') {
					image.src = image.src.slice(0, -4) + 'd.png'
				} else {
					image.src = image.src.slice(0, -5) + '.png'
				}
			})
			//
			console.log(galleries)

			for(let i in galleries){
				console.log(galleries[i])
				galleries[i].calcDot()
			}

			//
		}
	}
}
// Слайдер
class Gallery {
	constructor (selector) {
		let self = this
		self.slider = document.querySelector(selector)
		//
		if (self.slider === null) {
			console.error(`The slider "${selector}" was not initialized`)
			return
		}
		//
		self.slides = self.slider.querySelectorAll('.slide')
		if (self.slides.length === 0) {
			console.warn(`Gallery ${selector} empty`)
			return
		}
		//
		self.nextSlide = self.slider.querySelector('.next_btn')
		if (self.nextSlide !== null) {
			self.nextSlide.addEventListener('click', function () {
				self.next()
			})
		}
		//
		self.prevSlide = self.slider.querySelector('.prev_btn')
		if (self.prevSlide !== null) {
			self.prevSlide.addEventListener('click', function () {
				self.prev()
			})
		}
		//
		self.mainImgList = self.slider.querySelectorAll('.main_img_list > div')
		self.curSlide = 0
		self.maxSlide = self.slides.length - 1
		self.slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${indx * 100}%)`
		})
		setTimeout(() => {
			self.slider.classList.remove('opacity-0')
		}, 550)
		self.calcDot()
	}
	calcDot () {
		let self = this
		console.group('calcDot')
		console.log(theme.theme)
		console.log('curSlide', self.curSlide)
		console.log(self.mainImgList[self.curSlide])
		// bg-color3 hover:bg-color7 dark:bg-white dark:hover:bg-color7

		self.mainImgList.forEach(function (item) {
			item.classList.remove('bg-color8', 'bg-color3', 'hover:bg-color7', 'bg-white', 'hover:bg-color7', 'bg-white40')
		})

		if (theme.theme === 'light'){
			self.mainImgList[self.curSlide].classList.add('bg-color8')
		} else {
			self.mainImgList[self.curSlide].classList.add('bg-white')
		}

		self.mainImgList.forEach(function (item, index) {

			if(self.curSlide === index){
				return;
			}

			if (theme.theme === 'light'){
				item.classList.add('bg-color3')
			} else {
				item.classList.add('bg-white40')
			}

		})

		console.groupEnd()

	}
	prev () {
		if (this.curSlide === 0) {
			this.curSlide = this.maxSlide
		} else {
			this.curSlide--
		}
		this.slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`
		})
		this.calcDot()
	}
	next () {
		if (this.curSlide === this.maxSlide) {
			this.curSlide = 0
		} else {
			this.curSlide++
		}
		this.slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`
		})
		this.calcDot()
	}
}

let galleries = []

let theme = new Theme('light')
console.log(theme.theme)
galleries.push(new Gallery('#slider_1'))
galleries.push(new Gallery('#slider_2'))
galleries.push(new Gallery('#slider_3'))
galleries.push(new Gallery('#slider_4'))
galleries.push(new Gallery('#slider_5'))
