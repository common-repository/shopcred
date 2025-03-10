'use strict';

class ShopcredClass {

	/**
	 * [constructor description]
	 * @return {[type]} [description]
	 */
	constructor() {
		//this.ShopcredPageInstance = false;
		this.initVueComponents();
	}

	/**
	 * [initVueComponents description]
	 * @return {[type]} [description]
	 */
	initVueComponents() {

		let _this = this;

		Vue.component('shopcred-dashboard-before-content', {
			template: '#shopcred-dashboard-before-content',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},

				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},

				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-header', {
			template: '#shopcred-dashboard-header',

			props: {
				config: [Object, Boolean]
			},

			data: function () {
				return {}
			},

			computed: {
				classes: function () {
					return [

					];
				},
				configDefined: function () {
					return this.config ? true : false;
				},
				title: function () {
					return this.configDefined && this.config['title'] ? this.config['title'] : false;
				},
				desc: function () {
					return this.configDefined && this.config['desc'] ? this.config['desc'] : false;
				},
				videoLink: function () {
					let visibleMap = [
						'default',
						'theme-plugin-bundle',
						'single-plugin',
					];

					return this.configDefined && this.config['videoLink'] && visibleMap.includes(this.productType) ? this.config['videoLink'] : false;
				},
			}

		});

		Vue.component('shopcred-dashboard-before-component', {
			template: '#shopcred-dashboard-before-component',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-inner-component', {
			template: '#shopcred-dashboard-inner-component',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-after-component', {
			template: '#shopcred-dashboard-after-component',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-before-sidebar', {
			template: '#shopcred-dashboard-before-sidebar',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-sidebar', {
			template: '#shopcred-dashboard-sidebar',

			props: {
				config: [Object, Boolean],
				guide: [Object, Boolean],
				helpCenter: [Object, Boolean],
			},

			data: function () {
				return {
					themeInfo: window.ShopcredDashboardConfig.themeInfo || false,
					videoPopupEnable: false,
					videoEmbed: false
				}
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				guideVideos: function () {
					return this.guide.videos;
				},
				helpCenterLinks: function () {
					return this.helpCenter.links;
				},
				videoPopupVisible: function () {
					return this.videoPopupEnable;
				}
			},

			methods: {
				openVideoPopupHandler: function (embed) {
					this.videoPopupEnable = true;
					this.videoEmbed = embed;
				}
			}

		});

		Vue.component('shopcred-dashboard-after-sidebar', {
			template: '#shopcred-dashboard-after-sidebar',

			props: {
				config: [Object, Boolean]
			},

			computed: {
				configDefined: function () {
					return this.config ? true : false;
				},
				visible: function () {
					return this.configDefined && this.config['visible'] ? true : false;
				},
				bannersList: function () {
					return this.configDefined && this.config['bannersData'] ? this.config['bannersData'] : [];
				}
			}

		});

		Vue.component('shopcred-dashboard-banner', {
			template: '#shopcred-dashboard-banner',

			props: {
				config: [Object, Boolean]
			},

			data: function () {
				return {}
			},
			mounted: function () {
				if (this.customCss) {
					this.insertInlineStyles();
				}
				if (this.customScript) {
					this.insertInlineScripts();
				}
			},

			computed: {
				configDefined: function () {
					return this.config;
				},
				classes: function () {
					let classes = [
						'shopcred-dashboard-page__banner',
						'custom' !== this.preset ? 'premade-preset' : false,
						`${this.config['preset']}-preset`,
						this.config['size']
					];

					return classes;
				},
				visible: function () {
					return this.configDefined ? true : false;
				},
				preset: function () {
					return this.configDefined && this.config['preset'] ? this.config['preset'] : 'light';
				},
				label: function () {
					return this.configDefined && this.config['label'] ? this.config['label'] : false;
				},
				title: function () {
					return this.configDefined && this.config['title'] ? this.config['title'] : false;
				},
				content: function () {
					return this.configDefined && this.config['content'] ? this.config['content'] : false;
				},
				buttons: function () {
					return this.configDefined && this.config['buttons'] && 0 < this.config['buttons'].length ? this.config['buttons'] : false;
				},
				customHtml: function () {
					return this.configDefined && this.config['customHtml'] && '' !== this.config['customHtml'].length ? this.config['customHtml'] : false;
				},
				customCss: function () {
					return this.configDefined && this.config['customCss'] && '' !== this.config['customCss'].length ? this.config['customCss'] : false;
				},
				customScript: function () {
					return this.configDefined && this.config['customScript'] && '' !== this.config['customScript'].length ? this.config['customScript'] : false;
				},
			},

			methods: {

				insertInlineStyles: function () {
					let customCss = this.customCss,
						cssTag = document.createElement('style');

					cssTag.type = 'text/css';
					cssTag.setAttributeNode(document.createAttribute('scopped'));
					cssTag.appendChild(document.createTextNode(customCss));

					this.$el.appendChild(cssTag);
				},

				insertInlineScripts: function () {
					let customScript = this.customScript,
						scriptTag = document.createElement('script');

					scriptTag.setAttributeNode(document.createAttribute('async'));
					scriptTag.appendChild(document.createTextNode(customScript));

					this.$el.appendChild(scriptTag);
				}
			}

		});

		Vue.component('shopcred-dashboard-alert-list', {
			template: '#shopcred-dashboard-alert-list',

			props: {
				alertList: Array
			},

			data: function () {
				return {}
			},

			computed: {
				visible: function () {
					return 0 !== this.alertList.length;
				}
			}

		});

		Vue.component('shopcred-dashboard-alert-item', {
			template: '#shopcred-dashboard-alert-item',

			props: {
				config: [Object, Boolean]
			},

			data: function () {
				return {
					alertVisible: true
				}
			},

			mounted: function () {
				let localStorageNotices = _this.getLocalStorageData('notices', {});

				if (localStorageNotices.hasOwnProperty(this.config.id)) {
					let noticeData = localStorageNotices[this.config.id];
					this.alertVisible = noticeData.closed ? false : true;
				}

				if (this.config.duration) {
					setTimeout(() => {
						this.alertVisible = false;
					}, this.config.duration);
				}

			},

			computed: {
				configDefined: function () {
					return this.config;
				},
				visible: function () {
					return this.configDefined && this.alertVisible ? true : false;
				},
				classes: function () {
					let classes = [
						'shopcred-dashboard-page__alert',
						`${this.type}-type`,
						this.config.customClass
					];

					return classes;
				},
				type: function () {
					return this.configDefined && this.config['type'] ? this.config['type'] : false;
				},
				iconHtml: function () {
					let defaultIcon = false;

					switch (this.type) {
						case 'info':
							defaultIcon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="url(#infoNoticeType)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.269 15.9655C27.1641 17.1814 25.5461 17.22 24.1649 16.0427C21.6392 13.8811 18.2058 13.9969 16.0353 16.3322C14.0424 18.4938 14.1213 21.7555 16.1932 23.8398C18.3045 25.9241 21.6786 26.0785 23.9479 24.1101C24.9541 23.2415 26.0196 22.7398 27.3418 23.3574C29.0979 24.1678 29.532 26.3488 28.1902 27.7191C26.0196 29.9385 23.2769 30.9421 20.9288 31C13.6478 30.9807 8.55692 25.4609 9.03049 19.1114C9.46459 13.5917 14.516 8.51582 21.1853 9.03693C23.7702 9.22992 26.0788 10.2142 27.9534 12.0284C29.2163 13.225 29.3543 14.7882 28.269 15.9655Z" fill="white"/><defs><linearGradient id="infoNoticeType" x1="36.25" y1="9.375" x2="5.9375" y2="34.0624" gradientUnits="userSpaceOnUse"><stop stop-color="#3DDDC1"/><stop offset="1" stop-color="#5099E6"/></linearGradient></defs></svg>';
							break;

						case 'success':
							defaultIcon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM14.58 28.58L7.4 21.4C6.62 20.62 6.62 19.36 7.4 18.58C8.18 17.8 9.44 17.8 10.22 18.58L16 24.34L29.76 10.58C30.54 9.8 31.8 9.8 32.58 10.58C33.36 11.36 33.36 12.62 32.58 13.4L17.4 28.58C16.64 29.36 15.36 29.36 14.58 28.58Z" fill="url(#successNoticeType)"/><defs><linearGradient id="successNoticeType" x1="40" y1="40" x2="-3.8147e-06" y2="3.8147e-06" gradientUnits="userSpaceOnUse"><stop stop-color="#D1F540"/><stop offset="1" stop-color="#1ED01E"/></linearGradient></defs></svg>';
							break;

						case 'danger':
							defaultIcon = '<svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94024 35.0001H35.0602C38.1402 35.0001 40.0602 31.6601 38.5202 29.0001L23.4602 2.98011C21.9202 0.320107 18.0802 0.320107 16.5402 2.98011L1.48024 29.0001C-0.0597575 31.6601 1.86024 35.0001 4.94024 35.0001ZM20.0002 21.0001C18.9002 21.0001 18.0002 20.1001 18.0002 19.0001V15.0001C18.0002 13.9001 18.9002 13.0001 20.0002 13.0001C21.1002 13.0001 22.0002 13.9001 22.0002 15.0001V19.0001C22.0002 20.1001 21.1002 21.0001 20.0002 21.0001ZM22.0002 29.0001H18.0002V25.0001H22.0002V29.0001Z" fill="url(#dangerNoticeType)"/><defs><linearGradient id="dangerNoticeType" x1="39.063" y1="35.0001" x2="5.26814" y2="-2.87862" gradientUnits="userSpaceOnUse"><stop stop-color="#FEDB22"/><stop offset="1" stop-color="#FFA901"/></linearGradient></defs></svg>';
							break;

						case 'error':
							defaultIcon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 22C18.9 22 18 21.1 18 20V12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22ZM22 30H18V26H22V30Z" fill="black"/><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 22C18.9 22 18 21.1 18 20V12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22ZM22 30H18V26H22V30Z" fill="url(#errorNoticeType)"/><defs><linearGradient id="errorNoticeType" x1="40" y1="40" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8B8B"/><stop offset="1" stop-color="#F5435A"/></linearGradient></defs></svg>';
							break;
					}

					return this.configDefined && this.config['icon'] ? this.config['icon'] : defaultIcon;
				},
				title: function () {
					return this.configDefined && this.config['title'] ? this.config['title'] : false;
				},
				message: function () {
					return this.configDefined && this.config['message'] ? this.config['message'] : false;
				},
				buttons: function () {
					return this.configDefined && this.config['buttons'] ? this.config['buttons'] : false;
				},
			},

			methods: {
				closeAlert: function () {
					let localStorageNotices = Shopcred.getLocalStorageData('notices', {});

					localStorageNotices[this.config.id] = {
						closed: true
					}

					Shopcred.setLocalStorageData('notices', localStorageNotices);

					this.alertVisible = false;
				}
			}
		});

		Vue.component('plugin-item-more', {
			template: '#shopcred-dashboard-plugin-item-more',

			props: {
				pluginData: Object
			},

			data: function () {
				return {
					themeInfo: window.ShopcredDashboardConfig.themeInfo || false,
				}
			},

			computed: {

			}
		});

	}

	/**
	 * [initVueInstance description]
	 * @return {[type]} [description]
	 */
	initDashboardPageInstance() {
		Vue.config.devtools = true;

		if (!jQuery('#wpbody')[0]) {
			return false;
		}

		return new Vue({
			el: '#wpbody',

			data: {
				pageModule: window.ShopcredDashboardConfig.pageModule || false,
				subPageModule: window.ShopcredDashboardConfig.subPageModule || false,
				pageConfig: window.ShopcredDashboardConfig.pageModuleConfig,
				licenseList: window.ShopcredDashboardConfig.licenseList || [],
				themeInfo: window.ShopcredDashboardConfig.themeInfo || false,
				helpCenterConfig: window.ShopcredDashboardConfig.helpCenterConfig,
				avaliableBanners: window.ShopcredDashboardConfig.avaliableBanners,
				noticeList: window.ShopcredDashboardConfig.noticeList || [],

				serviceAction: '',
				serviceActionsVisible: false,
				serviceActionProcessed: false,
				ajaxServiceAction: null,
				serviceActionOptions: window.ShopcredDashboardConfig.serviceActionOptions || [],
			},

			mounted: function () {

				this.$refs.shopcredDashboardPage.classList.add('inited');

				this.simpleNoticeList.forEach((noticeData, index) => {
					let itemTimeout = (index * 500) + 1000;

					setTimeout(() => {
						this.$CXNotice.add({
							message: noticeData.message,
							type: noticeData.type,
							duration: noticeData.duration ? noticeData.duration : 99999,
						});
					}, itemTimeout);
				});

				if (jQuery('#toplevel_page_shopcred-dashboard')[0]) {
					let wpSubmenuItems = jQuery('#toplevel_page_shopcred-dashboard .wp-submenu > li'),
						urlParams = new URLSearchParams(window.location.href),
						currentSubpage = urlParams.get('subpage') || false;

					if (currentSubpage) {

						wpSubmenuItems.each((index, item) => {
							let $item = jQuery(item),
								urlParams = new URLSearchParams(jQuery('a', $item).attr('href')),
								page = urlParams.get('admin.php?page') || false,
								subpage = urlParams.get('subpage') || false;

							if (subpage === currentSubpage) {
								wpSubmenuItems.removeClass('current');
								$item.addClass('current');
							}
						});
					}
				}

				// hotkey catching
				document.onkeyup = (event) => {

					// Debug console hotkey ctrlKey + altKey + D
					if (event.ctrlKey && event.altKey && event.which === 68) {
						this.serviceActionsVisible = true;
					}
				};

			},

			computed: {

				beforeContentConfig: function () {
					let beforeContentConfig = this.pageConfig['before-content'] || false,
						bannersData = this.getBannerListForArea(beforeContentConfig);

					beforeContentConfig = Object.assign(beforeContentConfig, {
						bannersData: bannersData
					});

					return beforeContentConfig;
				},

				headerConfig: function () {
					let headerPageConfig = this.pageConfig['header'] || false;

					headerPageConfig = Object.assign(headerPageConfig, {
						licenseType: this.licenseType,
						productType: this.productType
					});

					return headerPageConfig;
				},

				beforeComponentConfig: function () {
					let beforeComponentConfig = this.pageConfig['before-component'] || false,
						bannersData = this.getBannerListForArea(beforeComponentConfig);

					beforeComponentConfig = Object.assign(beforeComponentConfig, {
						bannersData: bannersData
					});

					return beforeComponentConfig;
				},

				afterComponentConfig: function () {
					let afterComponentConfig = this.pageConfig['after-component'] || false,
						bannersData = this.getBannerListForArea(afterComponentConfig);

					afterComponentConfig = Object.assign(afterComponentConfig, {
						bannersData: bannersData
					});

					return afterComponentConfig;
				},

				beforeSidebarConfig: function () {
					let beforeSidebarConfig = this.pageConfig['before-sidebar'] || false,
						bannersData = this.getBannerListForArea(beforeSidebarConfig);

					beforeSidebarConfig = Object.assign(beforeSidebarConfig, {
						bannersData: bannersData
					});

					return beforeSidebarConfig;
				},

				sidebarConfig: function () {
					let sidebarConfig = this.pageConfig['sidebar'] || false;

					return sidebarConfig;
				},

				sidebarVisible: function () {

					if (this.sidebarConfig && this.sidebarConfig['visible']) {
						return true;
					}

					return false;
				},

				afterSidebarConfig: function () {
					let afterSidebarConfig = this.pageConfig['after-sidebar'] || false,
						bannersData = this.getBannerListForArea(afterSidebarConfig);

					afterSidebarConfig = Object.assign(afterSidebarConfig, {
						bannersData: bannersData
					});

					return afterSidebarConfig;
				},

				guideConfig: function () {
					let guideConfig = this.pageConfig['guide'] || false;

					return guideConfig;
				},

				alertNoticeList: function () {
					return this.noticeList.filter((noticeData) => {
						return noticeData.page.includes(this.pageModule) && 'alert' === noticeData.preset;
					});
				},

				simpleNoticeList: function () {
					return this.noticeList.filter((noticeData) => {
						return this.pageModule === noticeData.page && 'notice' === noticeData.preset;
					});
				},



			},

			methods: {

				getBannerListForArea(areaConfig) {
					let bannersData = [];

					if (areaConfig && areaConfig.hasOwnProperty('banners')) {
						bannersData = this.avaliableBanners.filter((avaliableBanner) => {
							return areaConfig.banners.includes(avaliableBanner.id)
								&& ('' === avaliableBanner.licenseType || avaliableBanner.licenseType === this.productType);
						});
					}

					return bannersData;
				}
			}

		});

	}

	getUtmParamsString(data = {}) {
		let utmString = false;

		if (0 === Object.keys(data).length) {
			return utmString;
		}

		utmString = Object.keys(data).map((key) => {
			return [key, data[key]].map(encodeURIComponent).join('=');
		}).join('&');

		return utmString;
	}

	/**
	 * [getLocalStorageData description]
	 * @return {[type]} [description]
	 */
	getLocalStorageData(_key = false, _default = false) {
		try {
			let shopcredDasboardData = JSON.parse(window.localStorage.getItem('shopcredDasboardData'));

			if (_key) {

				if (shopcredDasboardData.hasOwnProperty(_key)) {
					return shopcredDasboardData[_key];
				} else {
					return _default;
				}
			}

			return shopcredDasboardData;
		} catch (e) {
			return _default;
		}
	}

	/**
	 * Set localStorage data.
	 *
	 * @return {object|boolean}
	 */
	setLocalStorageData(key, data) {
		let shopcredDasboardData = this.getLocalStorageData() || {};

		shopcredDasboardData[key] = data;

		window.localStorage.setItem('shopcredDasboardData', JSON.stringify(shopcredDasboardData));
	}
}
