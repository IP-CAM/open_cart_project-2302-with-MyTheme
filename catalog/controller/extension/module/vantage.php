<?php

class ControllerExtensionModuleVantage extends Controller {
	
	public function index($setting) {
		
		//Load language file
		$this->language->load('extension/module/vantage');

		//Set title from language file
		$text_strings = array(
			'heading_title',
			'custom_warranty',
			'custom_service',
			'custom_prices',
			'custom_delivery',
			);
		
		foreach ($text_strings as $text) {
			$data[$text] = $this->language->get($text);
		}

		//Load Styles & Scripts
		// $this->document->addStyle('catalog/view/javascript/path/to/library.css');
		// $this->document->addScript('catalog/view/javascript/path/to/library.js');

		//Custom
		$data['text_warranty'] = $setting['text_warranty'];
		$data['icon_warranty'] = $setting['icon_warranty'];
		$data['icon_warranty_right'] = $setting['icon_warranty_right'];

		$data['text_service'] = $setting['text_service'];
		$data['icon_service'] = $setting['icon_service'];
		$data['icon_service_right'] = $setting['icon_service_right'];

		$data['text_price'] = $setting['text_price'];
		$data['icon_price'] = $setting['icon_price'];
		$data['icon_price_right'] = $setting['icon_price_right'];

		$data['text_delivery'] = $setting['text_delivery'];
		$data['icon_delivery'] = $setting['icon_delivery'];
		$data['icon_delivery_right'] = $setting['icon_delivery_right'];

		//Select template
		return $this->load->view('extension/module/vantage', $data);

	}
}
