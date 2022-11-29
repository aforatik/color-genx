
var rgb_text_input = document.querySelector('#rgb-text-output-container');
var output_box = document.querySelector('.output-box');
var r_slider = document.querySelector('#rgb-red');
var g_slider = document.querySelector('#rgb-green');
var b_slider = document.querySelector('#rgb-blue');


document.body.onload = () => {
  saved_color = localStorage.getItem('color');
  slider_values = localStorage.getItem('slider_values');
  
  output_box.style.backgroundColor = saved_color;
  rgb_text_input.value = saved_color;
  
  r_slider.value = parseInt(slider_values.split(',')[0]);
  g_slider.value = parseInt(slider_values.split(',')[1]);
  b_slider.value = parseInt(slider_values.split(',')[2]);
};

function color_text_value_process(){
  output_box.style.backgroundColor = rgb_text_input.value;
 slider_values = rgb_text_input.value.slice(4,-1).split(',');
 
 r_slider.value = parseInt(slider_values[0]);
 g_slider.value = parseInt(slider_values[1]);
 b_slider.value = parseInt(slider_values[2]);
 
 localStorage.setItem('color', rgb_text_input.value);
 localStorage.setItem('slider_values', [
    r_slider.value, 
    g_slider.value, 
    b_slider.value
  ]);
}

function slider_value_process(){
  slider_rgb_code =  'rgb('+r_slider.value+', '+g_slider.value+', '+b_slider.value+')';
  output_box.style.backgroundColor = slider_rgb_code;
  rgb_text_input.value = slider_rgb_code;
  
  localStorage.setItem('color', slider_rgb_code);
  localStorage.setItem('slider_values', [
    r_slider.value, 
    g_slider.value, 
    b_slider.value
  ]);
} 

function copy_rgb_code(){
  slider_rgb_code =  'rgb('+r_slider.value+', '+g_slider.value+', '+b_slider.value+')';
  navigator.clipboard.writeText(slider_rgb_code);
  alert("Copied the text: " + slider_rgb_code);
}
