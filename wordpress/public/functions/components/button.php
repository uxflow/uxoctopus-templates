<?php 
  /**
   * Button.
   */
  function button($props, $other = null) {
    /**
     * Appearances.
     */
    $size = $props->size ? 'is-' . $props->size : 'is-md';
    $rounded = $props->rounded ? 'is-rounded-' . $props->rounded : 'is-rounded-sm';
    $appearance = $props->appearance ? 'is-' . $props->appearance : 'is-primary';

    /**
     * Format custom classes.
     */
    $class = $size . ' ' . $rounded . ' ' . $appearance . ' ' . $props->class;
    
    /**
     * Type button.
     */
    $type = $props->submit ? 'submit' : 'button';

    /**
     * Onclick.
     */
    $onclick = $props->onclick ? 'onclick='. $props->onclick : null;
    ?>
      <button 
        type="<?php echo $type ?>" 
        class="button <?php echo $class ?>" 
        <?php 
          echo $onclick; 
      
          foreach($other as $key => $val):
            echo ' ' . $key . '=' . $val . ' ';
          endforeach;
        ?>
      >
        <?php echo $props->label ?>
      </button>
    <?php
  }
?>
